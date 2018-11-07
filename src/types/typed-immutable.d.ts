declare module 'typed-immutable' {
  import * as Immutable from 'immutable';

  type AnyValue<T> = {
    [P in keyof T]: any;
  };

  export module Record {
    export module Factory {}

    export interface Factory<TProps extends Object> {
      (values?: Partial<AnyValue<TProps>> | Iterable<[string, any]>): TypedRecord<TProps> & Readonly<TProps>;
      new (values?: Partial<AnyValue<TProps>> | Iterable<[string, any]>): TypedRecord<TProps> & Readonly<TProps>;
    }

    export function Factory<TProps extends Object>(values?: Partial<TProps> | Iterable<[string, any]>): TypedRecord<TProps> & Readonly<TProps>;
  }

  export function Record<TProps>(defaultValues: AnyValue<TProps>, name?: string): Record.Factory<TProps>;

  export interface TypedRecord<TProps extends Object> {
    has(key: string): key is keyof TProps & string;

    get<K extends keyof TProps>(key: K, notSetValue?: any): TProps[K];
    get<T>(key: string, notSetValue: T): T;

    hasIn(keyPath: Iterable<any>): boolean;
    getIn(keyPath: Iterable<any>): any;

    equals(other: any): boolean;
    hashCode(): number;

    set<K extends keyof TProps>(key: K, value: TProps[K]): this;
    update<K extends keyof TProps>(key: K, updater: (value: TProps[K]) => TProps[K]): this;
    merge(...collections: Array<Partial<TProps> | Iterable<[string, any]>>): this;
    mergeDeep(...collections: Array<Partial<TProps> | Iterable<[string, any]>>): this;

    mergeWith(
      merger: (oldVal: any, newVal: any, key: keyof TProps) => any,
      ...collections: Array<Partial<TProps> | Iterable<[string, any]>>
    ): this;
    mergeDeepWith(
      merger: (oldVal: any, newVal: any, key: any) => any,
      ...collections: Array<Partial<TProps> | Iterable<[string, any]>>
    ): this;

    delete<K extends keyof TProps>(key: K): this;
    remove<K extends keyof TProps>(key: K): this;

    clear(): this;

    setIn(keyPath: Iterable<any>, value: any): this;
    updateIn(keyPath: Iterable<any>, updater: (value: any) => any): this;
    mergeIn(keyPath: Iterable<any>, ...collections: Array<any>): this;
    mergeDeepIn(keyPath: Iterable<any>, ...collections: Array<any>): this;

    deleteIn(keyPath: Iterable<any>): this;
    removeIn(keyPath: Iterable<any>): this;

    toJS(): { [K in keyof TProps]: any };

    toJSON(): TProps;

    toObject(): TProps;

    withMutations(mutator: (mutable: this) => any): this;

    asMutable(): this;
    wasAltered(): boolean;
    asImmutable(): this;

    [Symbol.iterator](): IterableIterator<[keyof TProps, TProps[keyof TProps]]>;
  }

  interface List<T> extends Immutable.List<T> { }

  interface Map { new(data : Object): Map }
  interface Maybe { new(data : any): Maybe }
  interface Any { new(data : any): Any }
  interface Typed { new(data: any): Typed }

  function List<T>(descriptor: T) : List<T>
  function List<T>(descriptor: T, label: string) : List<T>

  function Maybe(type: any) : Maybe;
  function Any(value: any) : Any;

  function Typed(label: string, callback: (value:any) => any) : Typed
}
