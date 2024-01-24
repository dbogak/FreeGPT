import { SubmitKey } from "../store/config";
import type { PartialLocaleType } from "./index";

const ru: PartialLocaleType = {
  WIP: "Скоро...",
  Error: {
    Unauthorized:
      "Несанкционированный доступ. Пожалуйста, введите код доступа на [странице](/#/auth) настроек.",
  },
  ChatItem: {
    ChatItemCount: (count: number) => `${count} сообщений`,
  },
  Chat: {
    SubTitle: (count: number) => `${count} сообщений с ChatGPT`,
    Actions: {
      ChatList: "Перейти к списку чатов",
      CompressedHistory: "Сжатая история памяти",
      Export: "Экспортировать все сообщения в формате Markdown",
      Copy: "Копировать",
      Stop: "Остановить",
      Retry: "Повторить",
      Delete: "Удалить",
    },
    Commands: {
      new: "Начать новый чат",
      newm: "Начать новый чат с маской",
      next: "Следующий чат",
      prev: "Предыдущий чат",
      restart: "Перезапустить клиент",
      clear: "Очистить контекст",
      del: "Удалить чат",
      save: "Сохранить текущий сеанс чата",
      load: "Загрузить сеанс чата",
      copymemoryai: "Copy a session of memory prompt ai",
      updatemasks: "Update a session of memory prompt for a mask",
      summarize: "Суммируйте текущий сеанс этого чата",
      UI: {
        MasksSuccess: "Успешно обновлены сеансы масок",
        MasksFail: "Не удалось обновить сеанс масок",
        SummarizeSuccess: "Успешно суммирование сеанса этого чата",
        SummarizeFail: "Не удалось суммировать сеанс этого чата",
      }, 
    },
    InputActions: {
      Stop: "Стоп",
      ToBottom: "К последнему",
      Theme: {
        auto: "Авто",
        light: "Светлая тема",
        dark: "Темная тема",
      },
      Prompt: "Промпты",
      Masks: "Маски",
      Clear: "Очистить контекст",
      Settings: "Настройки",
    },
    Rename: "Переименовать чат",
    Typing: "Печатает…",
    Input: (submitKey: string) => {
      var inputHints = `${submitKey} для отправки сообщения`;
      if (submitKey === String(SubmitKey.Enter)) {
        inputHints += ", Shift + Enter для переноса строки";
      }
      return inputHints + ", / для поиска подсказок";
    },
    Send: "Отправить",
    Config: {
      Reset: "Сбросить настройки",
      SaveAs: "Сохранить как маску",
    },
  },
  Export: {
    Title: "Все сообщения",
    Copy: "Копировать все",
    Download: "Скачать",
    MessageFromYou: "Сообщение от вас",
    MessageFromChatGPT: "Сообщение от ChatGPT",
  },
  Memory: {
    Title: "Память",
    EmptyContent: "Пусто.",
    Send: "Отправить память",
    Copy: "Копировать память",
    Reset: "Сбросить сессию",
    ResetConfirm:
      "При сбросе текущая история переписки и историческая память будут удалены. Вы уверены, что хотите сбросить?",
  },
  Home: {
    NewChat: "Новый чат",
    DeleteChat: "Вы действительно хотите удалить выбранный разговор?",
    DeleteToast: "Чат удален",
    Revert: "Отмена",
  },
  Settings: {
    Title: "Настройки",
    SubTitle: "Все настройки",
    Danger: {
      Reset: {
        Title: "Сбросить все настройки",
        SubTitle: "Вернуть все пункты настроек к значениям по умолчанию",
        Action: "Сброс",
        Confirm: "Подтвердить сброс всех настроек к значениям по умолчанию?",
      },
      Clear: {
        Title: "Очистить все данные",
        SubTitle: "Очистить все сообщения и настройки",
        Action: "Очистить",
        Confirm: "Подтвердить очистку всех сообщений и настроек?",
      },
    },
    Lang: {
      Name: "Language", // ATTENTION: if you wanna add a new translation, please do not translate this value, leave it as `Language`
      All: "Все языки",
    },
    Avatar: "Аватар",
    FontSize: {
      Title: "Размер шрифта",
      SubTitle: "Настроить размер шрифта контента чата",
    },
    InjectSystemPrompts: {
      Title: "Вставить системные подсказки",
      SubTitle:
        "Принудительно добавить симулированную системную подсказку ChatGPT в начало списка сообщений для каждого запроса",
    },
    Update: {
      Version: (x: string) => `Версия: ${x}`,
      IsLatest: "Последняя версия",
      CheckUpdate: "Проверить обновление",
      IsChecking: "Проверка обновления...",
      FoundUpdate: (x: string) => `Найдена новая версия: ${x}`,
      GoToUpdate: "Обновить",
    },
    SendKey: "Клавиша отправки",
    Theme: "Тема",
    TightBorder: "Узкая граница",
    SendPreviewBubble: {
      Title: "Отправить предпросмотр",
      SubTitle: "Предварительный просмотр markdown в пузыре",
    },
    Mask: {
      Splash: {
        Title: "Экран заставки маски",
        SubTitle: "Показывать экран заставки маски перед началом нового чата",
      },
    },
    Prompt: {
      Disable: {
        Title: "Отключить автозаполнение",
        SubTitle: "Ввод / для запуска автозаполнения",
      },
      List: "Список подсказок",
      ListCount: (builtin: number, custom: number) =>
        `${builtin} встроенных, ${custom} пользовательских`,
      Edit: "Редактировать",
      Modal: {
        Title: "Список подсказок",
        Add: "Добавить",
        Search: "Поиск подсказок",
      },
      EditModal: {
        Title: "Редактировать подсказку",
      },
    },
    HistoryCount: {
      Title: "Количество прикрепляемых сообщений",
      SubTitle:
        "Количество отправляемых сообщений, прикрепляемых к каждому запросу",
    },
    CompressThreshold: {
      Title: "Порог сжатия истории",
      SubTitle:
        "Будет сжимать, если длина несжатых сообщений превышает указанное значение",
    },

    Usage: {
      Title: "Баланс аккаунта",
      SubTitle(used: any, total: any) {
        const hardLimitusd = total.hard_limit_usd !== undefined ? new Intl.NumberFormat('ru-RU', { style: 'currency', currency: 'USD' }).format(total.hard_limit_usd) : "неизвестно";
        const hardLimit = total.system_hard_limit_usd !== undefined ? new Intl.NumberFormat('ru-RU', { style: 'currency', currency: 'USD' }).format(total.system_hard_limit_usd) : "неизвестно";
        const usedFormatted = new Intl.NumberFormat('ru-RU', { style: 'currency', currency: 'USD' }).format(used);
        return `Использовано в этом месяце: ${usedFormatted}, Жесткий лимит: ${hardLimitusd}, Утвержденный лимит использования: ${hardLimit}`;
      },
      IsChecking: "Проверка...",
      Check: "Проверить",
      NoAccess: `Введите ключ сеанса в ключ API, начинающийся с префикса "sess-", чтобы проверить баланс.`,
    },

    Model: "Модель",
    Temperature: {
      Title: "Температура",
      SubTitle: "Чем выше значение, тем более случайный вывод",
    },
    MaxTokens: {
      Title: "Максимальное количество токенов",
      SubTitle: "Максимальная длина вводных и генерируемых токенов",
    },
    PresencePenalty: {
      Title: "Штраф за повторения",
      SubTitle:
        "Чем выше значение, тем больше вероятность общения на новые темы",
    },
    FrequencyPenalty: {
      Title: "Штраф за частоту",
      SubTitle:
        "Большее значение снижает вероятность повторения одной и той же строки",
    },
  },
  Store: {
    DefaultTopic: "Новый разговор",
    BotHello: "Здравствуйте! Как я могу вам помочь сегодня?",
    Error: "Что-то пошло не так. Пожалуйста, попробуйте еще раз позже.",
    Prompt: {
      History: (content: string) =>
        "Это краткое содержание истории чата между ИИ и пользователем: " +
        content,
      Topic:
        "Пожалуйста, создайте заголовок из четырех или пяти слов, который кратко описывает нашу беседу, без введения, знаков пунктуации, кавычек, точек, символов или дополнительного текста. Удалите кавычки.",
      Summarize:
        "Кратко изложите нашу дискуссию в 200 словах или менее для использования в будущем контексте.",
    },
  },
  Copy: {
    Success: "Скопировано в буфер обмена",
    Failed:
      "Не удалось скопировать, пожалуйста, предоставьте разрешение на доступ к буферу обмена",
  },
  Context: {
    Toast: (x: any) => `С ${x} контекстными подсказками`,
    Edit: "Контекстные и памятные подсказки",
    Add: "Добавить подсказку",
  },
  Plugin: {
    Name: "Плагин",
  },
  FineTuned: {
    Sysmessage: "Вы - ассистент, который",
  },
  PrivacyPage: {
    Name: "Конфиденциальность",
    Confirm: "Принять",
  },
  Mask: {
    Name: "Маска",
    Page: {
      Title: "Шаблон подсказки",
      SubTitle: (count: number) => `${count} шаблонов подсказок`,
      Search: "Поиск шаблонов",
      Create: "Создать",
    },
    Item: {
      Info: (count: number) => `${count} подсказок`,
      Chat: "Чат",
      View: "Просмотр",
      Edit: "Редактировать",
      Delete: "Удалить",
      DeleteConfirm: "Подтвердить удаление?",
    },
    EditModal: {
      Title: (readonly: boolean) =>
        `Редактирование шаблона подсказки ${
          readonly ? "(только для чтения)" : ""
        }`,
      Download: "Скачать",
      Clone: "Клонировать",
    },
    Config: {
      Avatar: "Аватар бота",
      Name: "Имя бота",
    },
  },
  NewChat: {
    Return: "Вернуться",
    Skip: "Пропустить",
    Title: "Выберите маску",
    SubTitle: "Общайтесь с душой за маской",
    More: "Найти еще",
    NotShow: "Не показывать снова",
    ConfirmNoShow:
      "Подтвердите отключение? Вы можете включить это позже в настройках.",
  },

  UI: {
    Confirm: "Подтвердить",
    Cancel: "Отмена",
    Close: "Закрыть",
    Create: "Создать",
    Edit: "Редактировать",
  },
  Exporter: {
    Model: "Модель",
    Messages: "Сообщения",
    Topic: "Тема",
    Time: "Время",
  },
};

export default ru;
