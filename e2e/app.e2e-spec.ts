import { DirectivePipePage } from './app.po';

describe('directive-pipe App', () => {
  let page: DirectivePipePage;

  beforeEach(() => {
    page = new DirectivePipePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
