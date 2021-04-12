import { Selector } from "testcafe";

const draggableElement = "#drag1";
const firstContainer = "#div1";
const secondContainer = "#div2";

fixture("Drag And Drop").page("https://www.w3schools.com/html/html5_draganddrop.asp");

test('Move logo to a different container', async testController => {
    await testController.dragToElement(draggableElement, secondContainer);
    await testController.expect(Selector(firstContainer).find(draggableElement).exists).notOk();
    await testController.expect(Selector(secondContainer).find(draggableElement).exists).ok();
    await testController.dragToElement(draggableElement, firstContainer);
    await testController.expect(Selector(firstContainer).find(draggableElement).exists).ok();
    await testController.expect(Selector(secondContainer).find(draggableElement).exists).notOk();
});