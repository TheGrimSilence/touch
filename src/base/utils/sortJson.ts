interface ISortJsonOptions {
  ignoreCase?: boolean;
  reverse?: boolean;
  depth?: number;
  level?: number;
}

export function sortJson(data: JSON, options: ISortJsonOptions) {
  const ignoreCase = options.ignoreCase || false;
  const reverse = options.reverse || false;
  const depth = options.depth || Infinity;
  const level = options.level || 1;
  const processing = level <= depth;
  const copy = Array.isArray(data) ? [] : {};
  let keys = Object.keys(data);

  if (typeof data !== 'object' || data === null) {
    return data;
  }

  if (processing) {
    keys = ignoreCase
      ? keys.sort((left, right) =>
          left.toLowerCase().localeCompare(right.toLowerCase()),
        )
      : keys.sort();
  }

  if (reverse) {
    keys = keys.reverse();
  }

  keys.forEach((key) => {
    const subSortOptions = Object.assign({}, options);
    subSortOptions.level = level + 1;
    copy[key] = sortJson(data[key], subSortOptions);
  });

  return copy;
}
