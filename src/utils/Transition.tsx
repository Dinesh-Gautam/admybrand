import React, { useRef, useEffect, useContext, ReactNode } from 'react';
import { CSSTransition as ReactCSSTransition } from 'react-transition-group';

/**
 * Context properties for managing transition state.
 */
interface TransitionContextProps {
  parent: {
    /** Whether the transition is currently showing. */
    show?: boolean;
    /** Whether this is the initial render of the component. */
    isInitialRender?: boolean;
    /** Whether the appear transition is enabled. */
    appear?: boolean;
  };
}

const TransitionContext = React.createContext<TransitionContextProps>({
  parent: {},
});

/**
 * Custom hook to determine if it's the initial render of a component.
 * @returns {boolean} True if it's the initial render, false otherwise.
 */
function useIsInitialRender() {
  const isInitialRender = useRef(true);
  useEffect(() => {
    isInitialRender.current = false;
  }, []);
  return isInitialRender.current;
}

/**
 * Props for the CSSTransition component.
 */
interface CSSTransitionProps {
  show?: boolean;
  enter?: string;
  enterStart?: string;
  enterEnd?: string;
  leave?: string;
  leaveStart?: string;
  leaveEnd?: string;
  appear?: boolean;
  unmountOnExit?: boolean;
  tag?: React.ElementType;
  children: ReactNode;
  /** Any other props to be passed to the underlying element. */
  [key: string]: any;
}

/**
 * A component that applies CSS transitions to its children based on props.
 * @param {CSSTransitionProps} props - The component props.
 * @param {boolean} [props.show] - Controls the visibility and transition state.
 * @param {string} [props.enter=''] - CSS classes applied during the enter transition.
 * @param {string} [props.enterStart=''] - CSS classes applied at the start of the enter transition.
 * @param {string} [props.enterEnd=''] - CSS classes applied at the end of the enter transition.
 * @param {string} [props.leave=''] - CSS classes applied during the leave transition.
 * @param {string} [props.leaveStart=''] - CSS classes applied at the start of the leave transition.
 * @param {string} [props.leaveEnd=''] - CSS classes applied at the end of the leave transition.
 * @param {boolean} [props.appear] - Enables the appear transition on initial mount.
 * @param {boolean} [props.unmountOnExit] - Unmounts the component from the DOM when it exits.
 * @param {React.ElementType} [props.tag='div'] - The HTML element tag to use for the transition wrapper.
 * @param {ReactNode} props.children - The content to be transitioned.
 * @param {any} [props.rest] - Additional props to be passed to the underlying element.
 * @returns {JSX.Element} The CSSTransition component.
 */
function CSSTransition({
  show,
  enter = '',
  enterStart = '',
  enterEnd = '',
  leave = '',
  leaveStart = '',
  leaveEnd = '',
  appear,
  unmountOnExit,
  tag = 'div',
  children,
  ...rest
}: CSSTransitionProps) {
  const enterClasses = enter.split(' ').filter((s) => s.length);
  const enterStartClasses = enterStart.split(' ').filter((s) => s.length);
  const enterEndClasses = enterEnd.split(' ').filter((s) => s.length);
  const leaveClasses = leave.split(' ').filter((s) => s.length);
  const leaveStartClasses = leaveStart.split(' ').filter((s) => s.length);
  const leaveEndClasses = leaveEnd.split(' ').filter((s) => s.length);
  const removeFromDom = unmountOnExit;

  function addClasses(node: HTMLElement, classes: string[]) {
    classes.length && node.classList.add(...classes);
  }

  function removeClasses(node: HTMLElement, classes: string[]) {
    classes.length && node.classList.remove(...classes);
  }

  const nodeRef = React.useRef<HTMLElement>(null);
  const Component = tag;

  return (
    <ReactCSSTransition
      appear={appear}
      nodeRef={nodeRef}
      unmountOnExit={removeFromDom}
      in={show}
      addEndListener={(done: () => void) => {
        nodeRef.current?.addEventListener('transitionend', done, false);
      }}
      onEnter={() => {
        if (!removeFromDom) nodeRef.current!.style.display = '';
        addClasses(nodeRef.current!, [...enterClasses, ...enterStartClasses]);
      }}
      onEntering={() => {
        removeClasses(nodeRef.current!, enterStartClasses);
        addClasses(nodeRef.current!, enterEndClasses);
      }}
      onEntered={() => {
        removeClasses(nodeRef.current!, [...enterEndClasses, ...enterClasses]);
      }}
      onExit={() => {
        addClasses(nodeRef.current!, [...leaveClasses, ...leaveStartClasses]);
      }}
      onExiting={() => {
        removeClasses(nodeRef.current!, leaveStartClasses);
        addClasses(nodeRef.current!, leaveEndClasses);
      }}
      onExited={() => {
        removeClasses(nodeRef.current!, [...leaveEndClasses, ...leaveClasses]);
        if (!removeFromDom) nodeRef.current!.style.display = 'none';
      }}
    >
      <Component
        ref={nodeRef}
        {...rest}
        style={{ display: !removeFromDom ? 'none' : '' }}
      >
        {children}
      </Component>
    </ReactCSSTransition>
  );
}

interface TransitionProps extends CSSTransitionProps {
  show?: boolean;
  appear?: boolean;
}

/**
 * Props for the Transition component, extending CSSTransitionProps.
 */
interface TransitionProps extends CSSTransitionProps {
  /** Whether the transition is currently showing. */
  show?: boolean;
  /** Whether the appear transition is enabled. */
  appear?: boolean;
}

/**
 * A component that manages transition state, either as a parent provider or a child transition.
 * It uses context to share transition state and applies CSS transitions via CSSTransition.
 * @param {TransitionProps} props - The component props.
 * @param {boolean} [props.show] - Controls the visibility and transition state for child transitions.
 * @param {boolean} [props.appear] - Enables the appear transition on initial mount.
 * @param {any} [props.rest] - Additional props to be passed to the CSSTransition component or context.
 * @returns {JSX.Element} The Transition component.
 */
function Transition({ show, appear, ...rest }: TransitionProps) {
  const { parent } = useContext(TransitionContext);
  const isInitialRender = useIsInitialRender();
  const isChild = show === undefined;

  if (isChild) {
    return (
      <CSSTransition
        appear={parent.appear || !parent.isInitialRender}
        show={parent.show}
        {...rest}
      />
    );
  }

  return (
    <TransitionContext.Provider
      value={{
        parent: {
          show,
          isInitialRender,
          appear,
        },
      }}
    >
      <CSSTransition appear={appear} show={show} {...rest} />
    </TransitionContext.Provider>
  );
}

export default Transition;
