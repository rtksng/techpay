export type Cleanup = () => void;
export type Killable = { kill?: () => void };
export type TrackAnimation = <T extends Killable>(animation: T) => T;
