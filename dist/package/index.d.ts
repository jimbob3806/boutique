/**
 * Redaction listener type.
 */
type RedactionListener = {
    func: (detail: any) => void;
    deps: string[];
};
/**
 * @file Redaction listener type declaration.
 * @author James Reid
 */
/**
 * Redaction listener type.
 *
 * @typedef {object} RedactionListener
 * @property {(detail:any) => void} func
 * @property {string[]} deps
 */
/**
 * @ignore
 * @type {RedactionListener}
 */
declare let RedactionListener: RedactionListener;

declare class Boutique {
    /**
     *
     * @param {any} state
     */
    constructor(state: any);
    /** @type {Object.<string,RedactionListener[]>} */
    events: {
        [x: string]: RedactionListener[];
    };
    state: any;
    /**
     *
     * @param {(state:any, detail:any) => any} callback
     * @returns {(detail:any) => void}
     */
    createRedaction(callback: (state: any, detail: any) => any): (detail: any) => void;
    /**
     *
     * @param {*} callback
     * @returns {RedactionListener}
     */
    createRedactionListener(callback: any): RedactionListener;
    /**
     *
     * @param {RedactionListener} listener
     * @returns {void}
     */
    addRedactionListener(listener: RedactionListener): void;
    /**
     *
     * @param {RedactionListener} listener
     * @returns {void}
     */
    removeRedactionListener(listener: RedactionListener): void;
    /**
     *
     * @param {[string, any][]} tracer
     * @param {*} detail
     * @param {RedactionListener[]} listeners
     * @returns {void}
     */
    redact(tracer: [string, any][], detail: any, listeners?: RedactionListener[]): void;
    /**
     *
     * @param {any[]} tracer
     * @param {string} path
     * @returns {ProxyHandler<object>}
     */
    handler(tracer: any[], path?: string): ProxyHandler<object>;
    /**
     * @returns {{state:object, tracer:any[]}}
     */
    get proxy(): {
        state: object;
        tracer: any[];
    };
}

export { Boutique };
