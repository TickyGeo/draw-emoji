const draw = (...x) => {
    document.write(`<div style="width: ${x.at(0)}px; height: ${x.at(1)}px; background: ${x.at(2)}; border-radius: ${x.at(3)}%; position: absolute; top: ${x.at(4)}; left: ${x.at(-1)};"></div><br>`);
}


draw(300, 300, 'yellow', 50, '30%', '40%');
draw(30, 30, 'white', 50, '39%', '44%');
draw(20, 20, 'brown', 50, '40%', '44.4%');
draw(30, 30, 'white', 50, '39%', '53%');
draw(20, 20, 'brown', 50, '40%', '53.36%');
draw(20, 40, 'black', 50, '47%', '48.1%');
draw(160, 80, 'black', 100, '55%', '44.1%');

