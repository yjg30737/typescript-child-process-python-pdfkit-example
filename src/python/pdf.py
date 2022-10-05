import os
import pdfkit
import sys
import io

try:
    # 아래 두 줄은 한글을 콘솔에 출력 시 깨지지 않도록 하기 위함 
    sys.stdout = io.TextIOWrapper(sys.stdout.detach(), encoding = 'utf-8')
    sys.stderr = io.TextIOWrapper(sys.stderr.detach(), encoding = 'utf-8')

    config = pdfkit.configuration()
    # sys.argv[1]은 pdf로 변환할 html 파일명
    htmlPath = os.path.join('static', sys.argv[1])
    os.chdir('data')
    htmlFile = os.path.join(os.getcwd(), htmlPath)
    pdfFile = os.path.join(os.getcwd(), 'download\out.pdf')
    pdfkit.from_file(htmlFile, pdfFile)
except Exception as e:
    print(e)
    # 오류 시 종료 코드
    sys.exit(1)
