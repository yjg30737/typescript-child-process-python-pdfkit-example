import os
import pdfkit
import sys
import io

try:
    # to support UTF-8 in vsc console
    sys.stdout = io.TextIOWrapper(sys.stdout.detach(), encoding = 'utf-8')
    sys.stderr = io.TextIOWrapper(sys.stderr.detach(), encoding = 'utf-8')

    config = pdfkit.configuration()
    # sys.argv[1] is a filename which will be converted
    htmlPath = os.path.join('static', sys.argv[1])
    os.chdir('data')
    htmlFile = os.path.join(os.getcwd(), htmlPath)
    pdfFile = os.path.join(os.getcwd(), 'download\out.pdf')
    pdfkit.from_file(htmlFile, pdfFile)
except Exception as e:
    print(e)
    # exit code when error occured
    sys.exit(1)
