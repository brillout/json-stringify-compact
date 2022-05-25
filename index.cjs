module.exports = jsonStringifyCompact
module.exports.jsonStringifyCompact = jsonStringifyCompact

function jsonStringifyCompact(obj) {
  return (
    JSON.stringify(obj, null, 2)
    .replaceAll(/\n(\s*)("[^"]+"): {\n/g, ' $2: {AAA$1')
    .replaceAll('\n', '')
    .replaceAll('AAA', '\n')
    //.replaceAll(/(\n\s*)("[^"]+"): {\n/g, ' $2: {$1')
    //.replaceAll(/\n\s*}/g, ' }')
    //.replaceAll(/{\s*\n\s*/g, '{ ')
    //.replaceAll(/,\ns*/g, ', ')
  )
}
