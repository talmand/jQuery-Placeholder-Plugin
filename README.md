jQuery-Placeholder-Plugin
=========================

Yet another placeholder plugin for older browsers.

Very simple process here. On load the plugin tests for placeholders support and then looks for any element that happens to have a placeholder attribute; therefore it is up to you to place this attribute appropriately. It will then use the value of the placeholder attribute to insert into what is hopefully an input using the value attribute. After that there is some focus and blur code to handle having the value appear and disappear as required.

If an element happens to have text in the value attribute as part of the HTML then it should avoid changing that element. If you delete the text in the input while in the browser then it'll fall back to the placeholder text.

It is up to you to write code to handle having placeholder text in an input's value attribute on submission; but you should be checking for that stuff anyway.