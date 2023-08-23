const shapes = require('./shapes.js');

describe('Shapes', () => {
  describe('shape', () => {
    it('should render the expected text line', () => {
      result = `<style> .logo{font: normal 30px sans-serif;} </style>` + '\n' +
               `<text x="150" y="100" class="logo" text-anchor="middle" fill="white">test</text>`;

      const shape = new shapes.Shape();
      shape.setText('test');
      expect(shape.renderText()).toEqual(result);      
    });
  }); 
});
