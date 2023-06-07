type Pop<T extends any[]> = T extends [...infer K, any] ? K : [];
