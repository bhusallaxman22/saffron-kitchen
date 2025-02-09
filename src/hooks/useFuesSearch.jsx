import { useMemo } from 'react';
import Fuse from 'fuse.js';

export default function useFuseSearch(data, options) {
    const fuse = useMemo(() => new Fuse(data, options), [data, options]);

    const search = (query) => {
        if (!query.trim()) return data;
        return fuse.search(query).map(result => result.item);
    };

    return { search };
}
