export interface SyntheticEvent<T = Element, E = Event>
  extends BaseSyntheticEvent<E, EventTarget & T, EventTarget> {}

interface BaseSyntheticEvent<E = object, C = any, T = any> {
  nativeEvent: E;
  target: T;
  bubbles: boolean;
  cancelable: boolean;
  eventPhase: number;
  isTrusted: boolean;
  stopPropagation(): void;
  isPropagationStopped(): boolean;
  persist(): void;
  timeStamp: number;
  type: string;
}

/** @public */
export type NativeAnimationEvent = AnimationEvent;
/** @public */
export type NativeClipboardEvent = ClipboardEvent;
/** @public */
export type NativeCompositionEvent = CompositionEvent;
/** @public */
export type NativeDragEvent = DragEvent;
/** @public */
export type NativeFocusEvent = FocusEvent;
/** @public */
export type NativeKeyboardEvent = KeyboardEvent;
/** @public */
export type NativeMouseEvent = MouseEvent;
/** @public */
export type NativeTouchEvent = TouchEvent;
/** @public */
export type NativePointerEvent = PointerEvent;
/** @public */
export type NativeTransitionEvent = TransitionEvent;
/** @public */
export type NativeUIEvent = UIEvent;
/** @public */
export type NativeWheelEvent = WheelEvent;

/**
 * @public
 */
export interface QwikAnimationEvent<T = Element> extends SyntheticEvent<T, NativeAnimationEvent> {
  animationName: string;
  elapsedTime: number;
  pseudoElement: string;
}

/**
 * @public
 */
export interface QwikClipboardEvent<T = Element> extends SyntheticEvent<T, NativeClipboardEvent> {
  clipboardData: DataTransfer;
}

/**
 * @public
 */
export interface QwikCompositionEvent<T = Element>
  extends SyntheticEvent<T, NativeCompositionEvent> {
  data: string;
}

/**
 * @public
 */
export interface QwikDragEvent<T = Element> extends QwikMouseEvent<T, NativeDragEvent> {
  dataTransfer: DataTransfer;
}

/**
 * @public
 */
export interface QwikPointerEvent<T = Element> extends QwikMouseEvent<T, NativePointerEvent> {
  pointerId: number;
  pressure: number;
  tiltX: number;
  tiltY: number;
  width: number;
  height: number;
  pointerType: 'mouse' | 'pen' | 'touch';
  isPrimary: boolean;
}

/**
 * @public
 */
export interface QwikFocusEvent<T = Element> extends SyntheticEvent<T, NativeFocusEvent> {
  relatedTarget: EventTarget | null;
  target: EventTarget & T;
}

/**
 * @public
 */
export interface QwikSubmitEvent<T = Element> extends SyntheticEvent<T> {}

/**
 * @public
 */
export interface QwikInvalidEvent<T = Element> extends SyntheticEvent<T> {
  target: EventTarget & T;
}

/**
 * @public
 */
export interface QwikChangeEvent<T = Element> extends SyntheticEvent<T> {
  target: EventTarget & T;
}

/**
 * @public
 */
export interface QwikKeyboardEvent<T = Element> extends SyntheticEvent<T, NativeKeyboardEvent> {
  altKey: boolean;
  charCode: number;
  ctrlKey: boolean;
  /**
   * See [DOM Level 3 Events spec](https://www.w3.org/TR/uievents-key/#keys-modifier). for a list of valid (case-sensitive) arguments to this method.
   */
  getModifierState(key: string): boolean;
  /**
   * See the [DOM Level 3 Events spec](https://www.w3.org/TR/uievents-key/#named-key-attribute-values). for possible values
   */
  key: string;
  keyCode: number;
  locale: string;
  location: number;
  metaKey: boolean;
  repeat: boolean;
  shiftKey: boolean;
  which: number;
}

/**
 * @public
 */
export interface QwikMouseEvent<T = Element, E = NativeMouseEvent> extends SyntheticEvent<T, E> {
  altKey: boolean;
  button: number;
  buttons: number;
  clientX: number;
  clientY: number;
  ctrlKey: boolean;
  /**
   * See [DOM Level 3 Events spec](https://www.w3.org/TR/uievents-key/#keys-modifier). for a list of valid (case-sensitive) arguments to this method.
   */
  getModifierState(key: string): boolean;
  metaKey: boolean;
  movementX: number;
  movementY: number;
  pageX: number;
  pageY: number;
  relatedTarget: EventTarget | null;
  screenX: number;
  screenY: number;
  shiftKey: boolean;
  x: number;
  y: number;
}

/**
 * @public
 */
export interface QwikTouchEvent<T = Element> extends SyntheticEvent<T, NativeTouchEvent> {
  altKey: boolean;
  changedTouches: TouchList;
  ctrlKey: boolean;
  /**
   * See [DOM Level 3 Events spec](https://www.w3.org/TR/uievents-key/#keys-modifier). for a list of valid (case-sensitive) arguments to this method.
   */
  getModifierState(key: string): boolean;
  metaKey: boolean;
  shiftKey: boolean;
  targetTouches: TouchList;
  touches: TouchList;
}

/**
 * @public
 */
export interface QwikUIEvent<T = Element> extends SyntheticEvent<T, NativeUIEvent> {
  detail: number;
  view: AbstractView;
}

/**
 * @public
 */
export interface QwikWheelEvent<T = Element> extends QwikMouseEvent<T, NativeWheelEvent> {
  deltaMode: number;
  deltaX: number;
  deltaY: number;
  deltaZ: number;
}

/**
 * @public
 */
export interface QwikTransitionEvent<T = Element> extends SyntheticEvent<T, NativeTransitionEvent> {
  elapsedTime: number;
  propertyName: string;
  pseudoElement: string;
}

interface AbstractView {
  styleMedia: StyleMedia;
  document: Document;
}
