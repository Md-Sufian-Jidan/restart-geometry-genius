function calculateRhombusArea() {
    const rhombusD1 = getInputValueById('rhombus-major');
    const rhombusD2 = getInputValueById('rhombus-minor');
    const area = 3.14 * rhombusD1 * rhombusD2;
    setInnerTextById('rhombus-area', area);

}