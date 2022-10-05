# typescript-child-process-python-pdfkit-example
Using child_process package in typescript to generate pdf with <a href="https://pypi.org/project/pdfkit/">pdfkit</a> package of Python

Generated pdf file will be saved in data/download folder.

Sample html file(pdf1.html) is in data/static folder.

This generated pure pdf file(text can be searched) out of that html file by default.

I tried:
* <a href="https://www.npmjs.com/package/html2canvas">html2canvas</a> - pdf-pretending image
* <a href="http://raw.githack.com/MrRio/jsPDF/master/docs/index.html">jsPDF</a> - doesn't support a lot of language except for English and few other languages
* <a href="https://github.com/amir20/phantomjs-node/blob/master/examples/render.js">phantomjs-node</a> - it worked, but it's not updated anymore

Conclusion: Python rocks.

If you can come up with better solution than this, let me know!

I will really thank you about that.

## How to install
See <a href="https://github.com/yjg30737/typescript-crud-example">the base project of this</a>
