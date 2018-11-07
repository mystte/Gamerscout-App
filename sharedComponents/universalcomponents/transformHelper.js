function transformValueForKey(key, value) {
  switch (key) {
    case 'perspective':
    case 'translateX':
    case 'translateY':
      return `${value}px`;

    default:
      return value;
  }
}

export function transformObjectToWebInline(transform) {
  let inlineTransformStr = '';
  for (let i = 0; i < transform.length; i += 1) {
    const objKey = Object.keys(transform[i])[0];
    const value = transformValueForKey(objKey, Object.values(transform[i])[0]);
    inlineTransformStr = `${inlineTransformStr}${objKey}(${value})`;
  }
  return inlineTransformStr;
}
export default { transformObjectToWebInline };

