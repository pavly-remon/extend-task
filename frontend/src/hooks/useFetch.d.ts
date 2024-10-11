interface ReturnedObject<T> {
    data: T | null;
    loading: boolean;
    error: string | null;
}
declare const useFetch: <T>(url: string, options?: RequestInit) => ReturnedObject<T>;
export default useFetch;
