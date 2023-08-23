const shapes = require('./shapes.js');

describe('Shapes', () => {
  describe('square', () => {
    it('should render the expected square shape', () => {
      const shape = new shapes.Square();
      shape.setColor("blue");
      expect(shape.render()).toEqual(`<rect x="0" y="0" width="300" height="300" rx="0" ry="0" fill="blue" />`);      
    });
  }); 
});
