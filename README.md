# Lighting Simulator

<p align="center">
  <img src="https://hasimyerli.com/projects/images/project-img/l2.png">
</p>

<p>
<b>Not:</b> Projede bazı geliştirmeler daha sonra  tekrar düzenlenecek (refactoring).
</p>

Ev aydınlatma simulatörü. Bu simulatör 12 adet lambadan oluşuyor ve sisteme giren tüm kullanıcılar lambaların üzerlerine tıklayarak açıp kapama işlemi yapabiliyor.
Açılan ya da kapanan lambalar, üzerlerindeki zaman aşımı süreleri o anda sisteme bağlı olan tüm kullacılara gerçek zamanlı iletiliyor.

Yani bir kullanıcının ekranında açılan lamba, diğer x bir kullanıcının ekranında da açılıyor. Açılan lambalar sarı, kapanan lambalar siyah oluyor.
Sistem ilk açıldığında tüm lambalar kapalı(siyah) olarak geliyor.

Kapanan ya da açılan lambaya 5 saniye boyunca başka hiçbir kullanıcı müdahale edemiyor 5 saniye olan süre ilgili lambanın üzerinde azalarak görünüyor.
Zaman aşımı dolduğunda herhangi bir kullanıcı tarafından tekrar işlem yapabiliyor. Yeni kullanıcı geldiğinde lambaların son durumunu aktif bir şekilde görebiliyor.

Projenin tüm modül bağımlılıkları package.json dosyasında bulunmaktadır.


### Normal Kurulum :
> npm install

> npm start

İşlemleri sırasıyla yapıldığında server.js localhost:3000 protu üzerinden çalışmaya başlayacaktır.


### Docker ile kurulum

önce image oluşturuyoruz. Burada image ismini farklı verebilirsiniz.
> docker build -t nodejs-lighting-simulator .

Daha sonra oluşan image ismi ile erişip container çalıştırıyoruz. Portları siz kendinize göre değiştirebilirsiniz.
> docker run  -p 3000:3000 nodejs-lighting-simulator

İşlemleri sırasıyla yapıldığında localhost:3000 protu üzerinden çalışmaya başlayacaktır.


<p align="center">
  <img src="https://hasimyerli.com/projects/images/project-img/l4.png">
</p>
