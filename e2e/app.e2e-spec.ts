import { MyattendancePage } from './app.po';

describe('myattendance App', function() {
  let page: MyattendancePage;

  beforeEach(() => {
    page = new MyattendancePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
