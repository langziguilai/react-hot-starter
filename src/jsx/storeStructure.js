//主要是用来展示store的数据结构
let AppStore = {
    user: {
        info: {
            id: "", //user id
            username: "",
            msgCnt: followCnt:
        }
        profile: {}, //map
        messages: { //这里使用map的原因是方便查找，不需要缓存是因为这个是私人的
            //{id,type,date,content,status};status:1代表已经读取 id=>obj
        }，
        boards: [] //set
            , //这里存放的board的ID，在boardCache中可以查找
        follows: {
            //id=>name
        },
        follow_boards: [id] //set
    },
    cache: { //这里都是列表：用于cache，避免二次查找
        find: [], //有趣的 FETCH_PINS_BY_FIND
        recent: [], //最新的 FETCH_PINS_BY_TIME
        popular: [], //流行的 FETCH_PINS_BY_POPULAR
        categories: { //分类 FETCH_PINS_BY_category
            //保存形式:ID+[]
        },
        tags: { //标签 FETCH_PINS_BY_tag
            //保存形式:tagName+[]
        },
        search: { //搜索 FETCH_PINS_BY_search
            //保存形式:searchValue+[]
        }
    },
    //将公共的取出来作为cache，这里就相当作为数据库使用，避免多次存储
    pinCache: {
        //保存格式:ID+内容
        {
            likeCnt,
            repinCnt,
        }
    },
    boardCache: {
        //保存格式:ID+内容
        {
            id: name: description: followCnt: pins: Set
        }
    },
    userCache: {
        //保存格式:ID+内容
        {

            boards: [{

            }]; //
        }
    },

}
