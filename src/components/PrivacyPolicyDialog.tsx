import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";

export const PrivacyPolicyDialog = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="text-primary hover:underline">
          Политикой обработки персональных данных
        </button>
      </DialogTrigger>
      <DialogContent className="max-w-4xl max-h-[80vh] bg-background">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">
            Политика в отношении обработки персональных данных
          </DialogTitle>
        </DialogHeader>
        <ScrollArea className="h-[60vh] pr-4">
          <div className="space-y-6 text-sm text-foreground/90">
            <div>
              <p className="font-semibold mb-4">
                Дата публикации: 23 ноября 2025 г.
              </p>
              <p className="mb-4">
                Настоящая Политика обработки персональных данных (далее — «Политика») действует в отношении всех персональных данных, которые Индивидуальный предприниматель Никитина-Шин Виктория Викторовна (ОГРНИП 318784700123456, ИНН 780456789012), далее — «Оператор», может получить от пользователей сайта <a href="https://skladnotut.ru" className="text-primary hover:underline">https://skladnotut.ru</a>, включая поддомен <a href="https://api.skladnotut.ru" className="text-primary hover:underline">https://api.skladnotut.ru</a>, используемый для технической обработки заявок (далее — «Сайт»).
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-2">1. Общие положения</h3>
              <p className="mb-2">
                1.1. Политика разработана в соответствии с Федеральным законом РФ №152-ФЗ «О персональных данных».
              </p>
              <p>
                1.2. Используя Сайт и отправляя данные через форму, пользователь подтверждает своё согласие с настоящей Политикой.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-2">2. Какие данные собираются</h3>
              <p className="mb-2">Оператор получает только те данные, которые пользователь добровольно отправляет через форму на Сайте:</p>
              <ul className="list-disc list-inside space-y-1 mb-2">
                <li>ФИО</li>
                <li>Номер телефона</li>
                <li>Параметры заявки (выбранный размер контейнера, срок аренды, комментарий)</li>
              </ul>
              <p>
                Оператор не собирает email-адреса, данные соцсетей, геолокацию и иную информацию, не указанную выше.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-2">3. Цели обработки данных</h3>
              <p className="mb-2">Данные используются для:</p>
              <ul className="list-disc list-inside space-y-1 mb-2">
                <li>обратной связи;</li>
                <li>уточнения деталей заявки;</li>
                <li>подготовки предложения;</li>
                <li>коммуникации по вопросу аренды контейнеров.</li>
              </ul>
              <p>
                Реклама, рассылки и автоматическое профилирование не ведутся.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-2">4. Правовые основания</h3>
              <p className="mb-2">Обработка данных осуществляется на основании:</p>
              <ul className="list-disc list-inside space-y-1">
                <li>согласия субъекта персональных данных (ст. 6 ФЗ №152-ФЗ);</li>
                <li>положений ГК РФ, регулирующих взаимодействие сторон.</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-2">5. Способы обработки и хранение данных</h3>
              <p className="mb-2">
                5.1. Обработка осуществляется с применением средств автоматизации и без их использования.
              </p>
              <p className="mb-2">
                5.2. Данные хранятся только в CRM Bitrix24, куда передаются через серверный скрипт.
              </p>
              <p>
                5.3. Сайт размещён на хостинге REG.RU, обеспечивающем техническую инфраструктуру.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-2">6. Передача данных третьим лицам</h3>
              <p className="mb-2">Передача возможна только:</p>
              <ul className="list-disc list-inside space-y-1 mb-2">
                <li>уполномоченным сотрудникам Оператора;</li>
                <li>хостинг-провайдеру REG.RU — для работы сайта;</li>
                <li>CRM Bitrix24 — для фиксации заявок.</li>
              </ul>
              <p>
                В иные организации данные не передаются.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-2">7. Трансграничная передача данных</h3>
              <p>
                Не осуществляется. Все данные обрабатываются на территории Российской Федерации.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-2">8. Срок хранения данных</h3>
              <p>
                Данные хранятся до достижения целей обработки и в соответствии с правилами CRM Bitrix24, либо до отзыва пользователем согласия.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-2">9. Защита персональных данных</h3>
              <p className="mb-2">Оператор использует:</p>
              <ul className="list-disc list-inside space-y-1">
                <li>SSL-сертификат;</li>
                <li>защищённую инфраструктуру REG.RU;</li>
                <li>контроль доступа к CRM;</li>
                <li>технические и организационные меры защиты.</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-2">10. Права пользователя</h3>
              <p className="mb-2">Пользователь имеет право:</p>
              <ul className="list-disc list-inside space-y-1 mb-2">
                <li>получать сведения о своих данных;</li>
                <li>требовать их уточнения, блокировки или удаления;</li>
                <li>отзывать согласие;</li>
                <li>направлять обращения оператору.</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-2">11. Контакты оператора</h3>
              <p className="mb-2">
                ИП Никитина-Шин Виктория Викторовна<br />
                ИНН: 780456789012<br />
                ОГРНИП: 318784700123456<br />
                Email: <a href="mailto:nikitanikitinshin@gmail.com" className="text-primary hover:underline">nikitanikitinshin@gmail.com</a>
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-2">12. Согласие пользователя</h3>
              <p>
                Отправляя форму на Сайте, пользователь подтверждает ознакомление с данной Политикой и согласие на обработку персональных данных.
              </p>
            </div>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};
