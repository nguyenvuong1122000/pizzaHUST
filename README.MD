## Running project

###FOR LINUX

- Để bắt đầu và run project này, máy tính cần cài sẵn Python 3.8 trong máy. Nên tạo một virtual environment để quản lý các thư viện. Install virtualenv bằng command : 
```
pip install virtualenv
```

 - Tải code của project này về máy. Trên terminal (linux) hoặc windows terminal, chạy command sau :

```
virtualenv env
```

- Command đó sẽ tạo  `env` trong project directory. Kích hoạt `env` đó bằng command  :

```
source env/bin/active
```

- Sau đó cài đặt các thư viện bổ trợ cần thiết : 
```
pip install -r requirements.txt
```

- Khởi chạy sever : 
```
python manager.py runserver
```
- Username của admin : vuong

- Password của admin : 123
- 
### FOR WINDOW :
- Install python, pip and install requirements, so it done :)))

- Add superuser to django :
```
python manager.py createsuperuser
```

