{
  type Video = {
    title: string;
    author: string;
  };

  type Optional<T> = {
    [P in keyof T]?: T[P]; // for ... in
  };

  type ReadOnly<T> = {
    [P in keyof T]?: T[P];
  };

  type VideoOptional = Optional<Video>;

  type Animal = {
    name: string;
    age: number;
  };
  const animal: Optional<Animal> = {
    name: "dog",
  };

  const video: ReadOnly<Video> = {
    title: "hi",
    author: "ellie",
  };

  type Nullable<T> = { [P in keyof T]: T[P] | null };
  const video2: Nullable<Video> = {
    title: "hi",
    author: null,
  };

  type Proxy<T> = {
    get(): T;
    set(value: T): void;
  };
  type Proxify<T> = {
    [P in keyof T]: Proxy<T[P]>;
  };
  type ProxyWrappedFn = <T>(value: T) => Proxy<T>;

  const wrappedProxyFn: ProxyWrappedFn = (value) => {
    let _value = value;
    return {
      get() {
        return _value;
      },
      set(value) {
        _value = value;
      },
    };
  };
  const videoProxy: Proxify<Video> = {
    title: wrappedProxyFn("haha"),
    author: wrappedProxyFn("hoho"),
  };
}
