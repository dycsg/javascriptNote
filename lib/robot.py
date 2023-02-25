
import requests
import urllib.request
import urllib.parse
mysql = input('跟AI说句话把：')
text = urllib.parse.quote(mysql)
url = '{}={}'.format('http://api.qingyunke.com/api.php?key=free&amp;appid=0&amp;msg')
r = urllib.request.urlopen(url)
r2 = r.read().decode("utf-8")
print(r2)