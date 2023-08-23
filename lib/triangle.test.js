const shapes = require('./shapes.js');

describe('Shapes', () => {
  describe('triangle', () => {
    it('should render the expected polygon shape', () => {
      const shape = new shapes.Triangle();
      shape.setColor("blue");
      expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');      
    });
  }); 
});


