// Не забудьте перед отправкой изменить в module.exports = function main(game, start) {
// Не деструктурируйте game, ваше решение не будет проходить тесты.
export default function main(game, start) {
    return game.right(start.x, start.y)
        .then(() => game.right(start.x + 1, start.y))
        .then(() => game.right(start.x + 2, start.y))
        .then(() => game.right(start.x + 3, start.y))
        .then(() => ({ x: start.x + 4, y: start.y }));
}
