const shapes = require('./shapes.js');

describe('Shapes', () => {
  describe('circle', () => {
    it('should render the expected circle shape', () => {
      const shape = new shapes.Circle();
      shape.setColor("blue");
      expect(shape.render()).toEqual(`<circle cx="150" cy="100" r="80" fill="blue"/>`);      
    });
  }); 
});
