const WORD_ROWS = [
  ["apple", "苹果", "🍎", "L1 入门", "水果食物"],
  ["bag", "书包", "🎒", "L1 入门", "学习用品"],
  ["ball", "球", "⚽", "L1 入门", "玩具运动"],
  ["banana", "香蕉", "🍌", "L1 入门", "水果食物"],
  ["black", "黑色", "⚫", "L1 入门", "颜色"],
  ["blue", "蓝色", "🔵", "L1 入门", "颜色"],
  ["book", "书", "📘", "L1 入门", "学习用品"],
  ["boy", "男孩", "👦", "L1 入门", "人物"],
  ["cat", "猫", "🐱", "L1 入门", "动物"],
  ["dog", "狗", "🐶", "L1 入门", "动物"],
  ["egg", "鸡蛋", "🥚", "L1 入门", "水果食物"],
  ["girl", "女孩", "👧", "L1 入门", "人物"],
  ["green", "绿色", "🟢", "L1 入门", "颜色"],
  ["milk", "牛奶", "🥛", "L1 入门", "水果食物"],
  ["pen", "钢笔", "🖊️", "L1 入门", "学习用品"],
  ["pencil", "铅笔", "✏️", "L1 入门", "学习用品"],
  ["red", "红色", "🔴", "L1 入门", "颜色"],
  ["white", "白色", "⚪", "L1 入门", "颜色"],
  ["yellow", "黄色", "🟡", "L1 入门", "颜色"],
  ["zoo", "动物园", "🦁", "L1 入门", "地点"],

  ["ant", "蚂蚁", "🐜", "L2 基础", "动物"],
  ["bear", "熊", "🐻", "L2 基础", "动物"],
  ["bird", "鸟", "🐦", "L2 基础", "动物"],
  ["bread", "面包", "🍞", "L2 基础", "水果食物"],
  ["cake", "蛋糕", "🍰", "L2 基础", "水果食物"],
  ["car", "小汽车", "🚗", "L2 基础", "交通玩具"],
  ["chair", "椅子", "🪑", "L2 基础", "家居学校"],
  ["cow", "奶牛", "🐄", "L2 基础", "动物"],
  ["desk", "课桌", "🪑", "L2 基础", "家居学校"],
  ["duck", "鸭子", "🦆", "L2 基础", "动物"],
  ["fish", "鱼", "🐟", "L2 基础", "动物"],
  ["fox", "狐狸", "🦊", "L2 基础", "动物"],
  ["hand", "手", "✋", "L2 基础", "身体"],
  ["head", "头", "🙂", "L2 基础", "身体"],
  ["leg", "腿", "🦵", "L2 基础", "身体"],
  ["monkey", "猴子", "🐒", "L2 基础", "动物"],
  ["mouth", "嘴巴", "👄", "L2 基础", "身体"],
  ["nose", "鼻子", "👃", "L2 基础", "身体"],
  ["orange", "橙子", "🍊", "L2 基础", "水果食物"],
  ["pig", "猪", "🐷", "L2 基础", "动物"],
  ["rabbit", "兔子", "🐰", "L2 基础", "动物"],
  ["rice", "米饭", "🍚", "L2 基础", "水果食物"],
  ["ruler", "尺子", "📏", "L2 基础", "学习用品"],
  ["school", "学校", "🏫", "L2 基础", "家居学校"],
  ["tiger", "老虎", "🐯", "L2 基础", "动物"],
  ["water", "水", "💧", "L2 基础", "水果食物"],

  ["baby", "婴儿", "👶", "L3 家庭生活", "家庭人物"],
  ["brother", "兄弟", "👦", "L3 家庭生活", "家庭人物"],
  ["bus", "公交车", "🚌", "L3 家庭生活", "交通"],
  ["doctor", "医生", "🧑‍⚕️", "L3 家庭生活", "职业"],
  ["driver", "司机", "🧑‍✈️", "L3 家庭生活", "职业"],
  ["father", "爸爸", "👨", "L3 家庭生活", "家庭人物"],
  ["friend", "朋友", "🧒", "L3 家庭生活", "家庭人物"],
  ["grandma", "奶奶", "👵", "L3 家庭生活", "家庭人物"],
  ["grandpa", "爷爷", "👴", "L3 家庭生活", "家庭人物"],
  ["home", "家", "🏠", "L3 家庭生活", "家居学校"],
  ["juice", "果汁", "🧃", "L3 家庭生活", "水果食物"],
  ["mother", "妈妈", "👩", "L3 家庭生活", "家庭人物"],
  ["nurse", "护士", "🧑‍⚕️", "L3 家庭生活", "职业"],
  ["pear", "梨", "🍐", "L3 家庭生活", "水果食物"],
  ["plane", "飞机", "✈️", "L3 家庭生活", "交通"],
  ["sister", "姐妹", "👧", "L3 家庭生活", "家庭人物"],
  ["student", "学生", "🧑‍🎓", "L3 家庭生活", "家居学校"],
  ["teacher", "老师", "🧑‍🏫", "L3 家庭生活", "职业"],
  ["train", "火车", "🚆", "L3 家庭生活", "交通"],
  ["worker", "工人", "👷", "L3 家庭生活", "职业"],

  ["arm", "胳膊", "💪", "L4 学校与身体", "身体"],
  ["body", "身体", "🧍", "L4 学校与身体", "身体"],
  ["class", "班级", "🏫", "L4 学校与身体", "学校课程"],
  ["classroom", "教室", "🏫", "L4 学校与身体", "学校课程"],
  ["crayon", "蜡笔", "🖍️", "L4 学校与身体", "学习用品"],
  ["ear", "耳朵", "👂", "L4 学校与身体", "身体"],
  ["English", "英语", "🇬🇧", "L4 学校与身体", "学校课程"],
  ["eye", "眼睛", "👁️", "L4 学校与身体", "身体"],
  ["face", "脸", "🙂", "L4 学校与身体", "身体"],
  ["foot", "脚", "🦶", "L4 学校与身体", "身体"],
  ["hair", "头发", "💇", "L4 学校与身体", "身体"],
  ["maths", "数学", "🔢", "L4 学校与身体", "学校课程"],
  ["music", "音乐", "🎵", "L4 学校与身体", "学校课程"],
  ["picture", "图画", "🖼️", "L4 学校与身体", "学习用品"],
  ["science", "科学", "🔬", "L4 学校与身体", "学校课程"],
  ["storybook", "故事书", "📖", "L4 学校与身体", "学习用品"],
  ["window", "窗户", "🪟", "L4 学校与身体", "家居学校"],

  ["bike", "自行车", "🚲", "L5 动作与日常", "动作交通"],
  ["cook", "做饭", "🍳", "L5 动作与日常", "动作"],
  ["dance", "跳舞", "💃", "L5 动作与日常", "动作"],
  ["draw", "画画", "🎨", "L5 动作与日常", "动作"],
  ["drink", "喝", "🥤", "L5 动作与日常", "动作"],
  ["eat", "吃", "🍽️", "L5 动作与日常", "动作"],
  ["jump", "跳", "🦘", "L5 动作与日常", "动作"],
  ["listen", "听", "👂", "L5 动作与日常", "动作"],
  ["play", "玩", "🎮", "L5 动作与日常", "动作"],
  ["read", "读", "📖", "L5 动作与日常", "动作"],
  ["run", "跑", "🏃", "L5 动作与日常", "动作"],
  ["sing", "唱歌", "🎤", "L5 动作与日常", "动作"],
  ["sleep", "睡觉", "😴", "L5 动作与日常", "动作"],
  ["speak", "说", "🗣️", "L5 动作与日常", "动作"],
  ["swim", "游泳", "🏊", "L5 动作与日常", "动作"],
  ["walk", "走路", "🚶", "L5 动作与日常", "动作"],
  ["wash", "洗", "🧼", "L5 动作与日常", "动作"],
  ["watch", "观看", "📺", "L5 动作与日常", "动作"],
  ["write", "写", "✍️", "L5 动作与日常", "动作"],

  ["bed", "床", "🛏️", "L6 房间衣物", "房间家具"],
  ["bedroom", "卧室", "🛏️", "L6 房间衣物", "房间家具"],
  ["coat", "外套", "🧥", "L6 房间衣物", "衣物"],
  ["dress", "连衣裙", "👗", "L6 房间衣物", "衣物"],
  ["hat", "帽子", "🎩", "L6 房间衣物", "衣物"],
  ["jacket", "夹克", "🧥", "L6 房间衣物", "衣物"],
  ["kitchen", "厨房", "🍳", "L6 房间衣物", "房间家具"],
  ["living", "客厅", "🛋️", "L6 房间衣物", "房间家具"],
  ["phone", "电话", "☎️", "L6 房间衣物", "房间家具"],
  ["shoe", "鞋", "👟", "L6 房间衣物", "衣物"],
  ["shorts", "短裤", "🩳", "L6 房间衣物", "衣物"],
  ["skirt", "短裙", "👗", "L6 房间衣物", "衣物"],
  ["sweater", "毛衣", "🧶", "L6 房间衣物", "衣物"],
  ["table", "桌子", "🍽️", "L6 房间衣物", "房间家具"],
  ["T-shirt", "T恤", "👕", "L6 房间衣物", "衣物"],
  ["toilet", "厕所", "🚽", "L6 房间衣物", "房间家具"],

  ["cloudy", "多云的", "☁️", "L7 时间天气", "天气时间"],
  ["cold", "冷的", "🥶", "L7 时间天气", "天气时间"],
  ["cool", "凉爽的", "🍃", "L7 时间天气", "天气时间"],
  ["Friday", "星期五", "📅", "L7 时间天气", "星期月份"],
  ["hot", "热的", "🥵", "L7 时间天气", "天气时间"],
  ["Monday", "星期一", "📅", "L7 时间天气", "星期月份"],
  ["rainy", "下雨的", "🌧️", "L7 时间天气", "天气时间"],
  ["Saturday", "星期六", "📅", "L7 时间天气", "星期月份"],
  ["snowy", "下雪的", "❄️", "L7 时间天气", "天气时间"],
  ["Sunday", "星期日", "📅", "L7 时间天气", "星期月份"],
  ["sunny", "晴朗的", "☀️", "L7 时间天气", "天气时间"],
  ["Thursday", "星期四", "📅", "L7 时间天气", "星期月份"],
  ["Tuesday", "星期二", "📅", "L7 时间天气", "星期月份"],
  ["warm", "温暖的", "🌤️", "L7 时间天气", "天气时间"],
  ["Wednesday", "星期三", "📅", "L7 时间天气", "星期月份"],
  ["windy", "有风的", "🌬️", "L7 时间天气", "天气时间"],

  ["afraid", "害怕的", "😨", "L8 描述与情绪", "形容词"],
  ["angry", "生气的", "😠", "L8 描述与情绪", "形容词"],
  ["beautiful", "美丽的", "🌸", "L8 描述与情绪", "形容词"],
  ["big", "大的", "⬆️", "L8 描述与情绪", "形容词"],
  ["clean", "干净的", "✨", "L8 描述与情绪", "形容词"],
  ["clever", "聪明的", "💡", "L8 描述与情绪", "形容词"],
  ["cute", "可爱的", "😊", "L8 描述与情绪", "形容词"],
  ["fast", "快的", "⚡", "L8 描述与情绪", "形容词"],
  ["fat", "胖的", "⭕", "L8 描述与情绪", "形容词"],
  ["fine", "好的", "👌", "L8 描述与情绪", "形容词"],
  ["funny", "有趣的", "😄", "L8 描述与情绪", "形容词"],
  ["happy", "开心的", "😄", "L8 描述与情绪", "形容词"],
  ["heavy", "重的", "🏋️", "L8 描述与情绪", "形容词"],
  ["kind", "友好的", "🤝", "L8 描述与情绪", "形容词"],
  ["light", "轻的", "🪶", "L8 描述与情绪", "形容词"],
  ["little", "小的", "🔹", "L8 描述与情绪", "形容词"],
  ["long", "长的", "📏", "L8 描述与情绪", "形容词"],
  ["new", "新的", "🆕", "L8 描述与情绪", "形容词"],
  ["old", "旧的", "🕰️", "L8 描述与情绪", "形容词"],
  ["sad", "难过的", "😢", "L8 描述与情绪", "形容词"],
  ["short", "短的", "↔️", "L8 描述与情绪", "形容词"],
  ["slow", "慢的", "🐢", "L8 描述与情绪", "形容词"],
  ["small", "小的", "🔸", "L8 描述与情绪", "形容词"],
  ["strong", "强壮的", "💪", "L8 描述与情绪", "形容词"],
  ["thin", "瘦的", "🧍", "L8 描述与情绪", "形容词"],
  ["tired", "累的", "🥱", "L8 描述与情绪", "形容词"],

  ["April", "四月", "🌷", "L9 高年级", "月份季节"],
  ["August", "八月", "☀️", "L9 高年级", "月份季节"],
  ["autumn", "秋天", "🍂", "L9 高年级", "月份季节"],
  ["December", "十二月", "🎄", "L9 高年级", "月份季节"],
  ["February", "二月", "📅", "L9 高年级", "月份季节"],
  ["January", "一月", "📅", "L9 高年级", "月份季节"],
  ["July", "七月", "🏖️", "L9 高年级", "月份季节"],
  ["June", "六月", "🌞", "L9 高年级", "月份季节"],
  ["March", "三月", "🌱", "L9 高年级", "月份季节"],
  ["May", "五月", "🌼", "L9 高年级", "月份季节"],
  ["November", "十一月", "🍁", "L9 高年级", "月份季节"],
  ["October", "十月", "🎃", "L9 高年级", "月份季节"],
  ["September", "九月", "🏫", "L9 高年级", "月份季节"],
  ["spring", "春天", "🌱", "L9 高年级", "月份季节"],
  ["summer", "夏天", "🏖️", "L9 高年级", "月份季节"],
  ["winter", "冬天", "⛄", "L9 高年级", "月份季节"],

  ["airport", "机场", "🛫", "L10 拓展", "地点"],
  ["cinema", "电影院", "🎬", "L10 拓展", "地点"],
  ["city", "城市", "🏙️", "L10 拓展", "地点"],
  ["farm", "农场", "🚜", "L10 拓展", "地点"],
  ["forest", "森林", "🌲", "L10 拓展", "地点"],
  ["hospital", "医院", "🏥", "L10 拓展", "地点"],
  ["library", "图书馆", "📚", "L10 拓展", "地点"],
  ["market", "市场", "🛒", "L10 拓展", "地点"],
  ["museum", "博物馆", "🏛️", "L10 拓展", "地点"],
  ["park", "公园", "🌳", "L10 拓展", "地点"],
  ["postcard", "明信片", "💌", "L10 拓展", "物品"],
  ["restaurant", "餐馆", "🍽️", "L10 拓展", "地点"],
  ["station", "车站", "🚉", "L10 拓展", "地点"],
  ["street", "街道", "🛣️", "L10 拓展", "地点"],
  ["supermarket", "超市", "🛒", "L10 拓展", "地点"],
  ["village", "村庄", "🏘️", "L10 拓展", "地点"],
];

const SECONDARY_WORD_ROWS = [
  ["lesson", "课", "📘", "L11 初中校园", "校园学习"],
  ["homework", "家庭作业", "📝", "L11 初中校园", "校园学习"],
  ["notebook", "笔记本", "📓", "L11 初中校园", "校园学习"],
  ["dictionary", "词典", "📚", "L11 初中校园", "校园学习"],
  ["eraser", "橡皮", "🧽", "L11 初中校园", "校园学习"],
  ["chalk", "粉笔", "🖍️", "L11 初中校园", "校园学习"],
  ["board", "黑板", "⬛", "L11 初中校园", "校园学习"],
  ["playground", "操场", "🏟️", "L11 初中校园", "校园学习"],
  ["exam", "考试", "📝", "L11 初中校园", "校园学习"],
  ["test", "测试", "✅", "L11 初中校园", "校园学习"],
  ["question", "问题", "❓", "L11 初中校园", "校园学习"],
  ["answer", "答案", "💬", "L11 初中校园", "校园学习"],
  ["sentence", "句子", "✍️", "L11 初中校园", "校园学习"],
  ["word", "单词", "🔤", "L11 初中校园", "校园学习"],
  ["letter", "字母", "🔡", "L11 初中校园", "校园学习"],
  ["page", "页", "📄", "L11 初中校园", "校园学习"],
  ["story", "故事", "📖", "L11 初中校园", "校园学习"],
  ["exercise", "练习", "🏃", "L11 初中校园", "校园学习"],
  ["project", "项目", "📌", "L11 初中校园", "校园学习"],
  ["group", "小组", "👥", "L11 初中校园", "校园学习"],
  ["partner", "伙伴", "🤝", "L11 初中校园", "校园学习"],
  ["rule", "规则", "📋", "L11 初中校园", "校园学习"],
  ["break", "课间休息", "⏸️", "L11 初中校园", "校园学习"],
  ["bell", "铃", "🔔", "L11 初中校园", "校园学习"],
  ["grade", "年级", "🏫", "L11 初中校园", "校园学习"],
  ["term", "学期", "📅", "L11 初中校园", "校园学习"],
  ["timetable", "课程表", "🗓️", "L11 初中校园", "校园学习"],
  ["course", "课程", "📚", "L11 初中校园", "校园学习"],
  ["art", "美术", "🎨", "L11 初中校园", "校园学习"],
  ["history", "历史", "🏛️", "L11 初中校园", "校园学习"],
  ["geography", "地理", "🌍", "L11 初中校园", "校园学习"],
  ["computer", "电脑", "💻", "L11 初中校园", "校园学习"],
  ["sport", "运动", "🏀", "L11 初中校园", "校园学习"],

  ["breakfast", "早餐", "🍳", "L12 初中生活", "饮食生活"],
  ["lunch", "午餐", "🍱", "L12 初中生活", "饮食生活"],
  ["dinner", "晚餐", "🍽️", "L12 初中生活", "饮食生活"],
  ["vegetable", "蔬菜", "🥦", "L12 初中生活", "饮食生活"],
  ["chicken", "鸡肉", "🍗", "L12 初中生活", "饮食生活"],
  ["beef", "牛肉", "🥩", "L12 初中生活", "饮食生活"],
  ["noodles", "面条", "🍜", "L12 初中生活", "饮食生活"],
  ["soup", "汤", "🍲", "L12 初中生活", "饮食生活"],
  ["potato", "土豆", "🥔", "L12 初中生活", "饮食生活"],
  ["tomato", "西红柿", "🍅", "L12 初中生活", "饮食生活"],
  ["carrot", "胡萝卜", "🥕", "L12 初中生活", "饮食生活"],
  ["fruit", "水果", "🍓", "L12 初中生活", "饮食生活"],
  ["cookie", "饼干", "🍪", "L12 初中生活", "饮食生活"],
  ["candy", "糖果", "🍬", "L12 初中生活", "饮食生活"],
  ["hamburger", "汉堡包", "🍔", "L12 初中生活", "饮食生活"],
  ["sandwich", "三明治", "🥪", "L12 初中生活", "饮食生活"],
  ["tea", "茶", "🍵", "L12 初中生活", "饮食生活"],
  ["coffee", "咖啡", "☕", "L12 初中生活", "饮食生活"],
  ["menu", "菜单", "📋", "L12 初中生活", "饮食生活"],
  ["price", "价格", "💰", "L12 初中生活", "购物"],
  ["shopkeeper", "店主", "🏪", "L12 初中生活", "购物"],
  ["customer", "顾客", "🧑", "L12 初中生活", "购物"],
  ["ticket", "票", "🎫", "L12 初中生活", "生活物品"],
  ["camera", "照相机", "📷", "L12 初中生活", "生活物品"],
  ["umbrella", "雨伞", "☂️", "L12 初中生活", "生活物品"],
  ["wallet", "钱包", "👛", "L12 初中生活", "生活物品"],
  ["key", "钥匙", "🔑", "L12 初中生活", "生活物品"],
  ["map", "地图", "🗺️", "L12 初中生活", "生活物品"],
  ["gift", "礼物", "🎁", "L12 初中生活", "生活物品"],
  ["holiday", "假期", "🏖️", "L12 初中生活", "生活时间"],
  ["weekend", "周末", "📅", "L12 初中生活", "生活时间"],
  ["birthday", "生日", "🎂", "L12 初中生活", "生活时间"],

  ["arrive", "到达", "📍", "L13 初中动作", "动作动词"],
  ["begin", "开始", "▶️", "L13 初中动作", "动作动词"],
  ["borrow", "借入", "📚", "L13 初中动作", "动作动词"],
  ["bring", "带来", "🎒", "L13 初中动作", "动作动词"],
  ["buy", "买", "🛒", "L13 初中动作", "动作动词"],
  ["carry", "搬运", "📦", "L13 初中动作", "动作动词"],
  ["catch", "抓住", "🤲", "L13 初中动作", "动作动词"],
  ["change", "改变", "🔁", "L13 初中动作", "动作动词"],
  ["choose", "选择", "☑️", "L13 初中动作", "动作动词"],
  ["collect", "收集", "🧺", "L13 初中动作", "动作动词"],
  ["compare", "比较", "⚖️", "L13 初中动作", "动作动词"],
  ["complete", "完成", "✅", "L13 初中动作", "动作动词"],
  ["count", "数数", "🔢", "L13 初中动作", "动作动词"],
  ["decide", "决定", "✅", "L13 初中动作", "动作动词"],
  ["describe", "描述", "🗣️", "L13 初中动作", "动作动词"],
  ["discuss", "讨论", "💬", "L13 初中动作", "动作动词"],
  ["enjoy", "喜欢", "😊", "L13 初中动作", "动作动词"],
  ["finish", "完成", "🏁", "L13 初中动作", "动作动词"],
  ["follow", "跟随", "👣", "L13 初中动作", "动作动词"],
  ["forget", "忘记", "❔", "L13 初中动作", "动作动词"],
  ["guess", "猜", "❓", "L13 初中动作", "动作动词"],
  ["happen", "发生", "⚡", "L13 初中动作", "动作动词"],
  ["help", "帮助", "🤝", "L13 初中动作", "动作动词"],
  ["join", "加入", "➕", "L13 初中动作", "动作动词"],
  ["keep", "保持", "📌", "L13 初中动作", "动作动词"],
  ["learn", "学习", "📚", "L13 初中动作", "动作动词"],
  ["leave", "离开", "🚪", "L13 初中动作", "动作动词"],
  ["lose", "丢失", "❌", "L13 初中动作", "动作动词"],
  ["meet", "遇见", "🤝", "L13 初中动作", "动作动词"],
  ["need", "需要", "📌", "L13 初中动作", "动作动词"],
  ["open", "打开", "📂", "L13 初中动作", "动作动词"],
  ["pass", "通过", "✅", "L13 初中动作", "动作动词"],
  ["practice", "练习", "🎯", "L13 初中动作", "动作动词"],
  ["remember", "记得", "🧠", "L13 初中动作", "动作动词"],
  ["return", "返回", "↩️", "L13 初中动作", "动作动词"],
  ["show", "展示", "👀", "L13 初中动作", "动作动词"],
  ["start", "开始", "▶️", "L13 初中动作", "动作动词"],
  ["stop", "停止", "⏹️", "L13 初中动作", "动作动词"],
  ["study", "学习", "📖", "L13 初中动作", "动作动词"],
  ["visit", "参观", "🚶", "L13 初中动作", "动作动词"],
  ["wait", "等待", "⏳", "L13 初中动作", "动作动词"],

  ["able", "能够的", "💪", "L14 初中描述", "描述词"],
  ["absent", "缺席的", "🚫", "L14 初中描述", "描述词"],
  ["active", "活跃的", "⚡", "L14 初中描述", "描述词"],
  ["alone", "独自的", "🚶", "L14 初中描述", "描述词"],
  ["busy", "忙碌的", "🕒", "L14 初中描述", "描述词"],
  ["careful", "仔细的", "🔍", "L14 初中描述", "描述词"],
  ["careless", "粗心的", "⚠️", "L14 初中描述", "描述词"],
  ["cheap", "便宜的", "💵", "L14 初中描述", "描述词"],
  ["clear", "清楚的", "✨", "L14 初中描述", "描述词"],
  ["dangerous", "危险的", "⚠️", "L14 初中描述", "描述词"],
  ["dark", "黑暗的", "🌙", "L14 初中描述", "描述词"],
  ["deep", "深的", "🌊", "L14 初中描述", "描述词"],
  ["difficult", "困难的", "🧩", "L14 初中描述", "描述词"],
  ["easy", "容易的", "🙂", "L14 初中描述", "描述词"],
  ["early", "早的", "🌅", "L14 初中描述", "描述词"],
  ["enough", "足够的", "✅", "L14 初中描述", "描述词"],
  ["excellent", "优秀的", "🏆", "L14 初中描述", "描述词"],
  ["famous", "著名的", "⭐", "L14 初中描述", "描述词"],
  ["fresh", "新鲜的", "🍃", "L14 初中描述", "描述词"],
  ["glad", "高兴的", "😊", "L14 初中描述", "描述词"],
  ["healthy", "健康的", "💚", "L14 初中描述", "描述词"],
  ["important", "重要的", "❗", "L14 初中描述", "描述词"],
  ["interesting", "有趣的", "💡", "L14 初中描述", "描述词"],
  ["late", "迟的", "⏰", "L14 初中描述", "描述词"],
  ["lovely", "可爱的", "😊", "L14 初中描述", "描述词"],
  ["modern", "现代的", "🏙️", "L14 初中描述", "描述词"],
  ["noisy", "吵闹的", "🔊", "L14 初中描述", "描述词"],
  ["popular", "受欢迎的", "👏", "L14 初中描述", "描述词"],
  ["possible", "可能的", "✅", "L14 初中描述", "描述词"],
  ["quiet", "安静的", "🤫", "L14 初中描述", "描述词"],
  ["ready", "准备好的", "✅", "L14 初中描述", "描述词"],
  ["serious", "严肃的", "😐", "L14 初中描述", "描述词"],
  ["special", "特别的", "✨", "L14 初中描述", "描述词"],
  ["useful", "有用的", "🧰", "L14 初中描述", "描述词"],
  ["wonderful", "精彩的", "🌟", "L14 初中描述", "描述词"],

  ["bank", "银行", "🏦", "L15 初中地点", "地点交通"],
  ["beach", "海滩", "🏖️", "L15 初中地点", "地点交通"],
  ["bridge", "桥", "🌉", "L15 初中地点", "地点交通"],
  ["building", "建筑物", "🏢", "L15 初中地点", "地点交通"],
  ["church", "教堂", "⛪", "L15 初中地点", "地点交通"],
  ["college", "学院", "🎓", "L15 初中地点", "地点交通"],
  ["corner", "角落", "↘️", "L15 初中地点", "地点交通"],
  ["countryside", "乡村", "🏞️", "L15 初中地点", "地点交通"],
  ["factory", "工厂", "🏭", "L15 初中地点", "地点交通"],
  ["garden", "花园", "🌼", "L15 初中地点", "地点交通"],
  ["hotel", "旅馆", "🏨", "L15 初中地点", "地点交通"],
  ["island", "岛", "🏝️", "L15 初中地点", "地点交通"],
  ["lake", "湖", "🏞️", "L15 初中地点", "地点交通"],
  ["mountain", "山", "⛰️", "L15 初中地点", "地点交通"],
  ["office", "办公室", "🏢", "L15 初中地点", "地点交通"],
  ["palace", "宫殿", "🏰", "L15 初中地点", "地点交通"],
  ["police", "警察", "👮", "L15 初中地点", "地点交通"],
  ["railway", "铁路", "🛤️", "L15 初中地点", "地点交通"],
  ["river", "河流", "🏞️", "L15 初中地点", "地点交通"],
  ["road", "道路", "🛣️", "L15 初中地点", "地点交通"],
  ["shop", "商店", "🏪", "L15 初中地点", "地点交通"],
  ["square", "广场", "⬜", "L15 初中地点", "地点交通"],
  ["theatre", "剧院", "🎭", "L15 初中地点", "地点交通"],
  ["tower", "塔", "🗼", "L15 初中地点", "地点交通"],
  ["traffic", "交通", "🚦", "L15 初中地点", "地点交通"],
  ["underground", "地铁", "🚇", "L15 初中地点", "地点交通"],
  ["university", "大学", "🎓", "L15 初中地点", "地点交通"],
  ["wall", "墙", "🧱", "L15 初中地点", "地点交通"],
  ["world", "世界", "🌍", "L15 初中地点", "地点交通"],

  ["advice", "建议", "💡", "L16 初中抽象", "抽象名词"],
  ["area", "地区", "🗺️", "L16 初中抽象", "抽象名词"],
  ["chance", "机会", "🎯", "L16 初中抽象", "抽象名词"],
  ["choice", "选择", "☑️", "L16 初中抽象", "抽象名词"],
  ["culture", "文化", "🏮", "L16 初中抽象", "抽象名词"],
  ["dream", "梦想", "💭", "L16 初中抽象", "抽象名词"],
  ["fact", "事实", "📌", "L16 初中抽象", "抽象名词"],
  ["future", "未来", "🚀", "L16 初中抽象", "抽象名词"],
  ["health", "健康", "💚", "L16 初中抽象", "抽象名词"],
  ["hobby", "爱好", "🎨", "L16 初中抽象", "抽象名词"],
  ["idea", "想法", "💡", "L16 初中抽象", "抽象名词"],
  ["interest", "兴趣", "⭐", "L16 初中抽象", "抽象名词"],
  ["language", "语言", "🗣️", "L16 初中抽象", "抽象名词"],
  ["life", "生活", "🌱", "L16 初中抽象", "抽象名词"],
  ["mistake", "错误", "❌", "L16 初中抽象", "抽象名词"],
  ["money", "钱", "💰", "L16 初中抽象", "抽象名词"],
  ["news", "新闻", "📰", "L16 初中抽象", "抽象名词"],
  ["number", "数字", "🔢", "L16 初中抽象", "抽象名词"],
  ["plan", "计划", "📝", "L16 初中抽象", "抽象名词"],
  ["problem", "问题", "❓", "L16 初中抽象", "抽象名词"],
  ["reason", "原因", "🔎", "L16 初中抽象", "抽象名词"],
  ["result", "结果", "📊", "L16 初中抽象", "抽象名词"],
  ["secret", "秘密", "🤫", "L16 初中抽象", "抽象名词"],
  ["service", "服务", "🧑‍💼", "L16 初中抽象", "抽象名词"],
  ["sound", "声音", "🔊", "L16 初中抽象", "抽象名词"],
  ["trip", "旅行", "🧳", "L16 初中抽象", "抽象名词"],

  ["ability", "能力", "💪", "L17 高中学术", "学术名词"],
  ["advantage", "优势", "🏆", "L17 高中学术", "学术名词"],
  ["agreement", "协议", "🤝", "L17 高中学术", "学术名词"],
  ["analysis", "分析", "🔬", "L17 高中学术", "学术名词"],
  ["approach", "方法", "🧭", "L17 高中学术", "学术名词"],
  ["attitude", "态度", "🙂", "L17 高中学术", "学术名词"],
  ["behavior", "行为", "🚶", "L17 高中学术", "学术名词"],
  ["challenge", "挑战", "⛰️", "L17 高中学术", "学术名词"],
  ["communication", "交流", "💬", "L17 高中学术", "学术名词"],
  ["community", "社区", "🏘️", "L17 高中学术", "学术名词"],
  ["condition", "条件", "📋", "L17 高中学术", "学术名词"],
  ["confidence", "信心", "💪", "L17 高中学术", "学术名词"],
  ["connection", "联系", "🔗", "L17 高中学术", "学术名词"],
  ["consequence", "后果", "📌", "L17 高中学术", "学术名词"],
  ["context", "语境", "📖", "L17 高中学术", "学术名词"],
  ["creativity", "创造力", "🎨", "L17 高中学术", "学术名词"],
  ["development", "发展", "📈", "L17 高中学术", "学术名词"],
  ["education", "教育", "🎓", "L17 高中学术", "学术名词"],
  ["environment", "环境", "🌿", "L17 高中学术", "学术名词"],
  ["experience", "经历", "🧳", "L17 高中学术", "学术名词"],
  ["experiment", "实验", "🧪", "L17 高中学术", "学术名词"],
  ["expression", "表达", "🗣️", "L17 高中学术", "学术名词"],
  ["government", "政府", "🏛️", "L17 高中学术", "学术名词"],
  ["information", "信息", "ℹ️", "L17 高中学术", "学术名词"],
  ["knowledge", "知识", "📚", "L17 高中学术", "学术名词"],
  ["method", "方法", "🧰", "L17 高中学术", "学术名词"],
  ["opportunity", "机会", "🚪", "L17 高中学术", "学术名词"],
  ["opinion", "观点", "💬", "L17 高中学术", "学术名词"],
  ["population", "人口", "👥", "L17 高中学术", "学术名词"],
  ["process", "过程", "🔄", "L17 高中学术", "学术名词"],
  ["purpose", "目的", "🎯", "L17 高中学术", "学术名词"],
  ["relationship", "关系", "🤝", "L17 高中学术", "学术名词"],
  ["research", "研究", "🔍", "L17 高中学术", "学术名词"],
  ["responsibility", "责任", "🛡️", "L17 高中学术", "学术名词"],
  ["society", "社会", "🏙️", "L17 高中学术", "学术名词"],
  ["solution", "解决办法", "✅", "L17 高中学术", "学术名词"],
  ["technology", "技术", "💻", "L17 高中学术", "学术名词"],
  ["tradition", "传统", "🏮", "L17 高中学术", "学术名词"],

  ["achieve", "实现", "🏆", "L18 高中动词", "高中动词"],
  ["adapt", "适应", "🔁", "L18 高中动词", "高中动词"],
  ["affect", "影响", "〰️", "L18 高中动词", "高中动词"],
  ["apply", "申请", "📝", "L18 高中动词", "高中动词"],
  ["arrange", "安排", "🗓️", "L18 高中动词", "高中动词"],
  ["attract", "吸引", "🧲", "L18 高中动词", "高中动词"],
  ["avoid", "避免", "🚫", "L18 高中动词", "高中动词"],
  ["balance", "平衡", "⚖️", "L18 高中动词", "高中动词"],
  ["benefit", "受益", "🎁", "L18 高中动词", "高中动词"],
  ["combine", "结合", "🔗", "L18 高中动词", "高中动词"],
  ["communicate", "交流", "💬", "L18 高中动词", "高中动词"],
  ["consider", "考虑", "🤔", "L18 高中动词", "高中动词"],
  ["contribute", "贡献", "➕", "L18 高中动词", "高中动词"],
  ["create", "创造", "🎨", "L18 高中动词", "高中动词"],
  ["depend", "依靠", "🪢", "L18 高中动词", "高中动词"],
  ["develop", "发展", "📈", "L18 高中动词", "高中动词"],
  ["encourage", "鼓励", "👏", "L18 高中动词", "高中动词"],
  ["establish", "建立", "🏗️", "L18 高中动词", "高中动词"],
  ["explain", "解释", "🗣️", "L18 高中动词", "高中动词"],
  ["explore", "探索", "🧭", "L18 高中动词", "高中动词"],
  ["improve", "提高", "📈", "L18 高中动词", "高中动词"],
  ["include", "包括", "📦", "L18 高中动词", "高中动词"],
  ["influence", "影响", "🌊", "L18 高中动词", "高中动词"],
  ["introduce", "介绍", "👋", "L18 高中动词", "高中动词"],
  ["manage", "管理", "📋", "L18 高中动词", "高中动词"],
  ["organize", "组织", "🗂️", "L18 高中动词", "高中动词"],
  ["prepare", "准备", "🎒", "L18 高中动词", "高中动词"],
  ["prevent", "阻止", "🛑", "L18 高中动词", "高中动词"],
  ["protect", "保护", "🛡️", "L18 高中动词", "高中动词"],
  ["realize", "意识到", "💡", "L18 高中动词", "高中动词"],
  ["reduce", "减少", "📉", "L18 高中动词", "高中动词"],
  ["reflect", "反映", "🪞", "L18 高中动词", "高中动词"],
  ["require", "需要", "📌", "L18 高中动词", "高中动词"],
  ["respond", "回应", "💬", "L18 高中动词", "高中动词"],
  ["support", "支持", "🤝", "L18 高中动词", "高中动词"],
  ["suppose", "假设", "🤔", "L18 高中动词", "高中动词"],
  ["survive", "幸存", "🌱", "L18 高中动词", "高中动词"],
  ["understand", "理解", "🧠", "L18 高中动词", "高中动词"],

  ["accurate", "准确的", "🎯", "L19 高中描述", "高中形容词"],
  ["advanced", "高级的", "🚀", "L19 高中描述", "高中形容词"],
  ["anxious", "焦虑的", "😟", "L19 高中描述", "高中形容词"],
  ["available", "可获得的", "✅", "L19 高中描述", "高中形容词"],
  ["aware", "意识到的", "💡", "L19 高中描述", "高中形容词"],
  ["basic", "基础的", "🔤", "L19 高中描述", "高中形容词"],
  ["complex", "复杂的", "🧩", "L19 高中描述", "高中形容词"],
  ["confident", "自信的", "💪", "L19 高中描述", "高中形容词"],
  ["convenient", "方便的", "👌", "L19 高中描述", "高中形容词"],
  ["creative", "有创造力的", "🎨", "L19 高中描述", "高中形容词"],
  ["curious", "好奇的", "🔍", "L19 高中描述", "高中形容词"],
  ["effective", "有效的", "✅", "L19 高中描述", "高中形容词"],
  ["efficient", "高效的", "⚡", "L19 高中描述", "高中形容词"],
  ["familiar", "熟悉的", "👋", "L19 高中描述", "高中形容词"],
  ["global", "全球的", "🌍", "L19 高中描述", "高中形容词"],
  ["independent", "独立的", "🧍", "L19 高中描述", "高中形容词"],
  ["individual", "个人的", "👤", "L19 高中描述", "高中形容词"],
  ["local", "当地的", "📍", "L19 高中描述", "高中形容词"],
  ["major", "主要的", "⭐", "L19 高中描述", "高中形容词"],
  ["mental", "心理的", "🧠", "L19 高中描述", "高中形容词"],
  ["natural", "自然的", "🌿", "L19 高中描述", "高中形容词"],
  ["normal", "正常的", "✅", "L19 高中描述", "高中形容词"],
  ["patient", "耐心的", "⏳", "L19 高中描述", "高中形容词"],
  ["personal", "个人的", "👤", "L19 高中描述", "高中形容词"],
  ["physical", "身体的", "🏃", "L19 高中描述", "高中形容词"],
  ["practical", "实际的", "🧰", "L19 高中描述", "高中形容词"],
  ["private", "私人的", "🔒", "L19 高中描述", "高中形容词"],
  ["professional", "专业的", "🧑‍💼", "L19 高中描述", "高中形容词"],
  ["social", "社会的", "👥", "L19 高中描述", "高中形容词"],
  ["traditional", "传统的", "🏮", "L19 高中描述", "高中形容词"],
  ["valuable", "有价值的", "💎", "L19 高中描述", "高中形容词"],
  ["various", "各种各样的", "🧺", "L19 高中描述", "高中形容词"],

  ["agriculture", "农业", "🌾", "L20 高中话题", "高中话题"],
  ["biology", "生物学", "🧬", "L20 高中话题", "高中话题"],
  ["chemistry", "化学", "⚗️", "L20 高中话题", "高中话题"],
  ["climate", "气候", "🌦️", "L20 高中话题", "高中话题"],
  ["competition", "比赛", "🏆", "L20 高中话题", "高中话题"],
  ["economy", "经济", "📈", "L20 高中话题", "高中话题"],
  ["energy", "能源", "🔋", "L20 高中话题", "高中话题"],
  ["engineering", "工程", "🏗️", "L20 高中话题", "高中话题"],
  ["finance", "金融", "💹", "L20 高中话题", "高中话题"],
  ["identity", "身份", "🪪", "L20 高中话题", "高中话题"],
  ["industry", "工业", "🏭", "L20 高中话题", "高中话题"],
  ["literature", "文学", "📚", "L20 高中话题", "高中话题"],
  ["medicine", "医学", "💊", "L20 高中话题", "高中话题"],
  ["memory", "记忆", "🧠", "L20 高中话题", "高中话题"],
  ["nature", "自然", "🌿", "L20 高中话题", "高中话题"],
  ["physics", "物理", "🧲", "L20 高中话题", "高中话题"],
  ["politics", "政治", "🏛️", "L20 高中话题", "高中话题"],
  ["pollution", "污染", "🏭", "L20 高中话题", "高中话题"],
  ["pressure", "压力", "📦", "L20 高中话题", "高中话题"],
  ["psychology", "心理学", "🧠", "L20 高中话题", "高中话题"],
  ["quality", "质量", "⭐", "L20 高中话题", "高中话题"],
  ["resources", "资源", "⛏️", "L20 高中话题", "高中话题"],
  ["safety", "安全", "🛡️", "L20 高中话题", "高中话题"],
  ["strategy", "策略", "♟️", "L20 高中话题", "高中话题"],
  ["system", "系统", "⚙️", "L20 高中话题", "高中话题"],
  ["target", "目标", "🎯", "L20 高中话题", "高中话题"],
  ["tourism", "旅游业", "🧳", "L20 高中话题", "高中话题"],
  ["transport", "交通运输", "🚆", "L20 高中话题", "高中话题"],
  ["volunteer", "志愿者", "🤝", "L20 高中话题", "高中话题"],
];

WORD_ROWS.push(...SECONDARY_WORD_ROWS);

const levelOrder = [...new Set(WORD_ROWS.map((row) => row[3]))];
const themes = levelOrder.map((level) => {
  const words = WORD_ROWS.filter((row) => row[3] === level)
    .map(([word, cn, picture, levelLabel, topic]) => ({ word, cn, picture, level: levelLabel, topic }))
    .sort((a, b) => a.word.length - b.word.length || a.word.localeCompare(b.word));

  return {
    id: level.toLowerCase().replace(/\s+/g, "-"),
    title: level,
    label: `${words.length} 个词`,
    words,
  };
});

function shuffleAllLevels() {
  themes.forEach((theme) => {
    theme.words = shuffle(theme.words);
  });
}

const state = {
  themeIndex: 0,
  roundIndex: 0,
  stars: 0,
  streak: 0,
  solved: false,
  letterSolved: false,
  readCompleted: false,
  selectedLetters: [],
  letterBank: [],
  learned: new Set(),
  unlockedThemeIndex: 0,
  completedThemes: new Set(),
};

const voiceState = {
  activeUtterances: new Set(),
  voicesReady: null,
  teaching: false,
  teachTimer: null,
  resumeTimer: null,
};

const els = {
  starCount: document.querySelector("#starCount"),
  roundLabel: document.querySelector("#roundLabel"),
  streakLabel: document.querySelector("#streakLabel"),
  modeLabel: document.querySelector("#modeLabel"),
  themeTitle: document.querySelector("#themeTitle"),
  themeTabs: document.querySelector("#themeTabs"),
  soundButton: document.querySelector("#soundButton"),
  picture: document.querySelector("#picture"),
  chinesePrompt: document.querySelector("#chinesePrompt"),
  helperText: document.querySelector("#helperText"),
  choiceGrid: document.querySelector("#choiceGrid"),
  letterGame: document.querySelector("#letterGame"),
  letterSlots: document.querySelector("#letterSlots"),
  letterBank: document.querySelector("#letterBank"),
  repeatButton: document.querySelector("#repeatButton"),
  feedbackBox: document.querySelector("#feedbackBox"),
  feedbackTitle: document.querySelector("#feedbackTitle"),
  feedbackText: document.querySelector("#feedbackText"),
  nextButton: document.querySelector("#nextButton"),
  skipButton: document.querySelector("#skipButton"),
  learnedCount: document.querySelector("#learnedCount"),
  wordShelf: document.querySelector("#wordShelf"),
  restartButton: document.querySelector("#restartButton"),
  finishModal: document.querySelector("#finishModal"),
  closeFinish: document.querySelector("#closeFinish"),
  finishText: document.querySelector("#finishText"),
  playAgainButton: document.querySelector("#playAgainButton"),
};

function currentTheme() {
  return themes[state.themeIndex];
}

function currentWord() {
  return currentTheme().words[state.roundIndex];
}

function shuffle(items) {
  return [...items].sort(() => Math.random() - 0.5);
}

function normalizeLetters(word) {
  return word.toLowerCase().replace(/[^a-z]/g, "").split("");
}

function speak(text) {
  if (!("speechSynthesis" in window)) {
    return;
  }

  window.speechSynthesis.cancel();
  speakLine(text, { lang: "en-US", rate: 0.78 });
}

function speakLetter(letter) {
  if (!("speechSynthesis" in window)) {
    return;
  }

  window.speechSynthesis.cancel();
  speakLine(letter.toUpperCase(), { lang: "en-US", rate: 0.68, pitch: 1.12, pauseAfter: 80 });
}

function waitForVoices() {
  if (!("speechSynthesis" in window)) {
    return Promise.resolve([]);
  }

  const voices = window.speechSynthesis.getVoices();
  if (voices.length > 0) {
    return Promise.resolve(voices);
  }

  if (!voiceState.voicesReady) {
    voiceState.voicesReady = new Promise((resolve) => {
      const finish = () => resolve(window.speechSynthesis.getVoices());
      window.speechSynthesis.onvoiceschanged = finish;
      window.setTimeout(finish, 900);
    });
  }

  return voiceState.voicesReady;
}

function pickVoice(voices, lang) {
  const lowerLang = lang.toLowerCase();
  return (
    voices.find((voice) => voice.lang.toLowerCase() === lowerLang) ||
    voices.find((voice) => voice.lang.toLowerCase().startsWith(lowerLang.slice(0, 2))) ||
    null
  );
}

async function speakLine(text, options = {}) {
  if (!("speechSynthesis" in window)) {
    return false;
  }

  const voices = await waitForVoices();
  const lang = options.lang || "en-US";
  const rate = options.rate || 0.78;
  const pitch = options.pitch || 1.05;
  const pauseAfter = options.pauseAfter ?? 260;

  return new Promise((resolve) => {
    const utterance = new SpeechSynthesisUtterance(text);
    const voice = pickVoice(voices, lang);

    if (voice) {
      utterance.voice = voice;
    }

    utterance.lang = voice?.lang || lang;
    utterance.rate = rate;
    utterance.pitch = pitch;
    voiceState.activeUtterances.add(utterance);

    const finish = (ok) => {
      voiceState.activeUtterances.delete(utterance);
      window.setTimeout(() => resolve(ok), pauseAfter);
    };

    utterance.onend = () => finish(true);
    utterance.onerror = () => finish(false);
    window.speechSynthesis.speak(utterance);
    window.speechSynthesis.resume();
  });
}

async function teachRead(item) {
  if (!("speechSynthesis" in window)) {
    setFeedback("error", "没有声音", "当前浏览器不支持声音朗读，可以换 Chrome 或 Edge 打开。");
    return;
  }

  voiceState.teaching = true;
  window.clearTimeout(voiceState.teachTimer);
  window.clearInterval(voiceState.resumeTimer);
  window.speechSynthesis.cancel();
  els.repeatButton.disabled = true;
  els.repeatButton.textContent = "正在教读...";
  setFeedback("success", "声音教读", `先听单词，再听字母拼写：${item.word}`);

  const voices = await waitForVoices();
  const letters = normalizeLetters(item.word).join(", ");
  const lines = [
    { text: item.word, lang: "en-US", rate: 0.56 },
    { text: letters, lang: "en-US", rate: 0.66 },
    { text: item.word, lang: "en-US", rate: 0.72 },
  ];

  const utterances = lines.map((line, index) => {
    const utterance = new SpeechSynthesisUtterance(line.text);
    const voice = pickVoice(voices, line.lang);
    if (voice) {
      utterance.voice = voice;
    }
    utterance.lang = voice?.lang || line.lang;
    utterance.rate = line.rate;
    utterance.pitch = 1.05;
    utterance.volume = 1;
    utterance.onstart = () => voiceState.activeUtterances.add(utterance);
    utterance.onend = () => {
      voiceState.activeUtterances.delete(utterance);
      if (index === lines.length - 1) {
        finishTeachRead(item);
      }
    };
    utterance.onerror = () => {
      voiceState.activeUtterances.delete(utterance);
      if (index === lines.length - 1) {
        finishTeachRead(item);
      }
    };
    return utterance;
  });

  utterances.forEach((utterance) => {
    voiceState.activeUtterances.add(utterance);
    window.speechSynthesis.speak(utterance);
  });

  voiceState.resumeTimer = window.setInterval(() => {
    if (!window.speechSynthesis.speaking && !window.speechSynthesis.pending) {
      window.clearInterval(voiceState.resumeTimer);
      return;
    }
    window.speechSynthesis.resume();
  }, 250);

  voiceState.teachTimer = window.setTimeout(() => {
    finishTeachRead(item);
  }, 6500);
}

function finishTeachRead(item) {
  if (!voiceState.teaching) {
    return;
  }

  voiceState.teaching = false;
  voiceState.activeUtterances.clear();
  window.clearTimeout(voiceState.teachTimer);
  window.clearInterval(voiceState.resumeTimer);
  els.repeatButton.disabled = false;
  els.repeatButton.textContent = `再听一遍 ${item.word}`;
  state.readCompleted = true;
  setFeedback("success", "轮到你读", `现在大声读：${item.word}`);
  renderGame();
}

function setFeedback(type, title, text) {
  els.feedbackBox.className = `feedback-box ${type ? `is-${type}` : ""}`;
  els.feedbackTitle.textContent = title;
  els.feedbackText.textContent = text;
}

function wordKey(word = currentWord()) {
  return `${currentTheme().id}:${word.word}`;
}

function buildChoices(item) {
  const sameTopic = currentTheme().words.filter((word) => word.topic === item.topic && word.word !== item.word);
  const sameLevel = currentTheme().words.filter((word) => word.word !== item.word);
  const allWords = WORD_ROWS.map(([word, cn, picture, level, topic]) => ({ word, cn, picture, level, topic })).filter(
    (word) => word.word !== item.word,
  );
  const candidates = [...sameTopic, ...sameLevel, ...allWords];
  const seen = new Set();
  const distractors = [];

  for (const candidate of shuffle(candidates)) {
    if (!seen.has(candidate.word)) {
      seen.add(candidate.word);
      distractors.push(candidate.word);
    }
    if (distractors.length === 2) {
      break;
    }
  }

  return shuffle([item.word, ...distractors]);
}

function renderThemeTabs() {
  const visibleThemes = themes
    .map((theme, index) => ({ theme, index }))
    .filter((entry) => entry.index <= state.unlockedThemeIndex);

  els.themeTabs.innerHTML = visibleThemes
    .map(({ theme, index }) => {
      const isCompleted = state.completedThemes.has(index);
      const status = isCompleted ? "已通关" : index === state.themeIndex ? "闯关中" : "可挑战";

      return `
        <button
          class="theme-tab ${isCompleted ? "is-completed" : ""}"
          type="button"
          role="tab"
          aria-selected="${index === state.themeIndex}"
          data-theme-index="${index}"
        >
          <strong>${theme.title}</strong>
          <span>${theme.label} · ${status}</span>
        </button>
      `;
    })
    .join("");
}
function renderChoices() {
  const choices = buildChoices(currentWord());

  els.choiceGrid.innerHTML = choices
    .map(
      (choice) => `
        <button class="choice-card" type="button" data-choice="${choice}" ${state.solved ? "disabled" : ""}>
          ${choice}
        </button>
      `,
    )
    .join("");
}

function renderLetters() {
  const item = currentWord();
  const letters = normalizeLetters(item.word);
  if (state.letterBank.length === 0) {
    state.letterBank = shuffle(letters.map((letter, index) => ({ letter, index })));
  }
  const selectedIndexes = new Set(state.selectedLetters.map((letter) => letter.sourceIndex));

  els.letterSlots.innerHTML = letters
    .map((_, index) => `<span class="letter-slot">${state.selectedLetters[index]?.letter || ""}</span>`)
    .join("");

  els.letterBank.innerHTML = state.letterBank
    .map(
      (entry) => `
        <button
          class="letter-chip"
          type="button"
          data-letter="${entry.letter}"
          data-source-index="${entry.index}"
          ${selectedIndexes.has(entry.index) || state.letterSolved ? "disabled" : ""}
        >
          ${entry.letter}
        </button>
      `,
    )
    .join("");
}

function renderShelf() {
  const learnedWords = currentTheme().words.filter((item) => state.learned.has(wordKey(item)));

  els.learnedCount.textContent = `${learnedWords.length} 个单词`;
  els.wordShelf.innerHTML =
    learnedWords.length === 0
      ? `<p class="empty-shelf">答对后，单词会放到这里。</p>`
      : learnedWords
          .map(
            (item) => `
              <div class="shelf-card">
                <span>${item.picture}</span>
                <strong>${item.word}</strong>
              </div>
            `,
          )
          .join("");
}

function renderStatus() {
  const theme = currentTheme();
  const total = WORD_ROWS.length;
  const currentBefore = themes.slice(0, state.themeIndex).reduce((sum, themeItem) => sum + themeItem.words.length, 0);
  els.starCount.textContent = state.stars;
  els.roundLabel.textContent = `${currentBefore + state.roundIndex + 1} / ${total}`;
  els.streakLabel.textContent = state.streak;
  els.modeLabel.textContent = currentTheme().title;
  els.themeTitle.textContent = currentTheme().title;
}

function renderGame() {
  const item = currentWord();

  els.picture.textContent = item.picture;
  els.chinesePrompt.textContent = item.cn;
  els.helperText.textContent = state.solved ? `很好！${item.cn} 是 ${item.word}。` : "听一听，再点正确的英文。";
  els.nextButton.disabled = !state.readCompleted;
  els.nextButton.textContent =
    state.roundIndex === currentTheme().words.length - 1
      ? state.themeIndex === themes.length - 1
        ? "完成全部关卡"
        : "通关并进入下一关"
      : "下一题";
  els.repeatButton.disabled = !state.letterSolved || voiceState.teaching;
  els.repeatButton.textContent = state.readCompleted
    ? `再听一遍 ${item.word}`
    : state.letterSolved
      ? `声音教读 ${item.word}`
      : "拼完后声音教读";
  els.letterGame.classList.toggle("is-open", state.solved);

  renderThemeTabs();
  renderChoices();
  renderLetters();
  renderShelf();
  renderStatus();
}

function chooseWord(choice) {
  if (state.solved) {
    return;
  }

  const item = currentWord();
  if (choice === item.word) {
    state.solved = true;
    state.stars += 1;
    state.streak += 1;
    state.learned.add(wordKey(item));
    setFeedback("success", "答对啦！", `${item.word}，${item.cn}。再点下面的字母拼一拼。`);
    speak(item.word);
  } else {
    state.streak = 0;
    setFeedback("error", "再试一次", `这个不是 ${item.cn}。可以先点“听单词”。`);
  }

  renderGame();
}

function chooseLetter(letter, sourceIndex) {
  if (!state.solved || state.letterSolved) {
    return;
  }

  speakLetter(letter);

  const item = currentWord();
  const letters = normalizeLetters(item.word);
  const nextIndex = state.selectedLetters.length;
  const expected = letters[nextIndex];

  if (letter !== expected) {
    setFeedback("error", "字母不对哦", `下一个字母是 ${expected.toUpperCase()}。`);
    return;
  }

  state.selectedLetters.push({ letter, sourceIndex });

  if (state.selectedLetters.length === letters.length) {
    state.letterSolved = true;
    setFeedback("success", "拼出来啦！", `现在点“声音教读 ${item.word}”，听老师慢慢读。`);
  }

  renderGame();
}

function resetRound(message = "看大图，点正确的英文单词。") {
  state.solved = false;
  state.letterSolved = false;
  state.readCompleted = false;
  state.selectedLetters = [];
  state.letterBank = [];
  setFeedback("", "准备好了吗？", message);
  renderGame();
}

function nextRound() {
  const theme = currentTheme();
  if (!state.solved) {
    setFeedback("error", "还不能下一题", "先选对这个单词，才能继续闯关。");
    return;
  }


  if (!state.letterSolved) {
    setFeedback("error", "还不能下一题", "先把这个单词的字母拼完。");
    return;
  }

  if (!state.readCompleted) {
    setFeedback("error", "还不能下一题", "先点击声音教读，听完跟读后才能继续。");
    return;
  }
  if (state.roundIndex < theme.words.length - 1) {
    state.roundIndex += 1;
    resetRound();
    return;
  }

  state.completedThemes.add(state.themeIndex);

  if (state.themeIndex < themes.length - 1) {
    state.unlockedThemeIndex = Math.max(state.unlockedThemeIndex, state.themeIndex + 1);
    state.themeIndex += 1;
    state.roundIndex = 0;
    resetRound(`太棒了，${theme.title} 已通关！进入 ${currentTheme().title}。`);
    return;
  }

  showFinish();
}

function skipRound() {
  if (!state.solved) {
    setFeedback("error", "不能跳过", "过关游戏要先做对当前单词，才能去下一题。");
    return;
  }

  nextRound();
}

function switchTheme(index) {
  if (index > state.unlockedThemeIndex) {
    setFeedback("error", "关卡未解锁", `先通关 ${themes[state.unlockedThemeIndex].title}，才能挑战后面的关卡。`);
    return;
  }

  state.themeIndex = index;
  state.roundIndex = 0;
  state.streak = 0;
  resetRound("关卡切换好了，先看图再选词。");
}

function restartGame() {
  shuffleAllLevels();
  state.themeIndex = 0;
  state.roundIndex = 0;
  state.stars = 0;
  state.streak = 0;
  state.learned.clear();
  state.unlockedThemeIndex = 0;
  state.completedThemes.clear();
  hideFinish();
  resetRound("重新开始啦。");
}

function showFinish() {
  els.finishText.textContent = `这一轮拿到了 ${state.stars} 颗小星星，认识了 ${state.learned.size} 个单词。`;
  els.finishModal.classList.add("is-open");
  els.finishModal.setAttribute("aria-hidden", "false");
}

function hideFinish() {
  els.finishModal.classList.remove("is-open");
  els.finishModal.setAttribute("aria-hidden", "true");
}

els.themeTabs.addEventListener("click", (event) => {
  const tab = event.target.closest(".theme-tab");
  if (tab) {
    switchTheme(Number(tab.dataset.themeIndex));
  }
});

els.choiceGrid.addEventListener("click", (event) => {
  const card = event.target.closest(".choice-card");
  if (card) {
    chooseWord(card.dataset.choice);
  }
});

els.letterBank.addEventListener("click", (event) => {
  const chip = event.target.closest(".letter-chip");
  if (chip) {
    chooseLetter(chip.dataset.letter, Number(chip.dataset.sourceIndex));
  }
});

els.soundButton.addEventListener("click", () => speak(currentWord().word));
els.repeatButton.addEventListener("click", () => {
  teachRead(currentWord());
});
els.nextButton.addEventListener("click", nextRound);
els.skipButton.addEventListener("click", skipRound);
els.restartButton.addEventListener("click", restartGame);
els.closeFinish.addEventListener("click", hideFinish);
els.playAgainButton.addEventListener("click", restartGame);
els.finishModal.addEventListener("click", (event) => {
  if (event.target === els.finishModal) {
    hideFinish();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    hideFinish();
  }
});

shuffleAllLevels();
resetRound();
