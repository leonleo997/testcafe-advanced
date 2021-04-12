import { Selector, t } from "testcafe";

const uploadFileInput = ".dx-fileuploader-input";

fixture("Upload file").page("https://js.devexpress.com/Demos/WidgetsGallery/Demo/FileUploader/FileSelection/jQuery/Light/");

test('Move logo to a different container', async testController => {
    await testController.switchToIframe('.demo-frame');
    await testController.setFilesToUpload(uploadFileInput, "./example.txt");
    await testController.expect(Selector(".dx-fileuploader-file-name").textContent).eql("example.txt")
});