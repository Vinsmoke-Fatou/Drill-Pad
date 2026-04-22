function paginate(items, pageNumber, pageSize) {
    const totalItems = items.length;

    if (totalItems === 0 || pageSize <= 0) {
        return {
            data: [],
            page: pageNumber,
            pageSize: pageSize,
            totalItems: 0,
            totalPages: 0,
            hasNextPage: false,
            hasPrevPage: false
        };
    }

    const totalPages = Math.ceil(totalItems / pageSize);
    const start = (pageNumber - 1) * pageSize;
    const end = start + pageSize;
    
    const data = items.slice(start, end);

    const hasPrevPage = pageNumber > 1;
    const hasNextPage = pageNumber < totalPages;

    return {
        data,
        page: pageNumber,
        pageSize,
        totalItems,
        totalPages,
        hasPrevPage,
        hasNextPage
    };
}