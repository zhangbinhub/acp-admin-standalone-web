import zhLocale from 'element-plus/es/locale/lang/zh-cn'

const messages = Object.assign(zhLocale, {
  lang: '语言',
  langName: '简体中文',
  messages: {
    loginSuccess: '登录成功',
    loginFailed: '登录失败',
    loginInvalid: '用户名或密码错误',
    logoutConfirm: '确认退出当前系统吗？',
    requestFailed: '请求失败',
    validateFailed: '校验失败',
    failed403: '请求被拒绝，可能没有权限，请联系系统管理员',
    failed404: '找不到资源',
    leavePage: '输入的数据将会丢失，确认关闭吗？',
    allPages: '所有页面',
    otherPages: '其他页面',
    requestSuccess: '请求成功',
    createSuccess: '创建成功',
    saveSuccess: '保存成功',
    updateSuccess: '更新成功',
    deleteSuccess: '删除成功',
    changedPassword: '您修改了密码，请重新登录',
    tableNoData: '没有查询到数据',
    tableDataCannotDel: '该条数据不允许删除',
    selectDataForDelete: '请选择需要删除的数据',
    deleteDataConfirm: '确定删除所选数据吗？',
    modifyLoginNo: '修改登录账号将重置密码，是否继续？',
    resetPassword: '确定重置所选用户密码吗？',
    refreshServiceConfirm: '确定刷新服务配置信息吗？指定的服务将重新从配置中心获取配置信息',
    refreshRouteConfirm: '确定刷新网关路由信息吗？',
    deployWorkFlowConfirm: '确定部署流程定义吗？',
    executeDeployConfirm: '确定执行部署任务吗？'
  },
  pageTitle: {
    test: '测试',
    E404: '404',
    E500: '500',
    login: '登录',
    passwordExpire: '密码过期',
    home: '首页',
    personalInformation: '个人信息维护',
    routeConfig: '路由配置',
    routeLog: '路由日志',
    logFile: '日志文件',
    operateLog: '操作日志',
    loginLog: '登录日志',
    appConfig: '应用配置',
    authConfig: '权限配置',
    orgConfig: '机构配置',
    runtimeConfig: '运行参数配置',
    roleConfig: '角色配置',
    userConfig: '用户配置',
    workflowDeploy: '工作流部署',
    workflowManager: '工作流管理',
    deploy: '部署'
  },
  common: {
    exit: '退出'
  },
  dialog: {
    info: '提示信息',
    error: '错误信息',
    warning: '警告信息',
    success: '操作成功',
    confirm: '请确认'
  },
  home: {
    fullScreen: '全屏',
    exitFullScreen: '退出全屏',
    personalInformation: '个人信息',
    logout: '退出登录',
    closeAll: '关闭所有',
    closeOther: '关闭其他'
  },
  errorPage: {
    message404: '页面找不到',
    description404: '众里寻他千百度 蓦然回首 那人却在灯火阑珊处',
    message500: '服务器出错了',
    buttons: {
      back: '返回',
      home: '主页',
      login: '登录'
    }
  },
  forms: {
    scriptFile: '脚本文件',
    serverIpRegex: '服务器IP正则',
    loginStatistics: '登录统计',
    numberOfOnlineUsers: '在线用户数',
    changePassword: '修改密码',
    pleaseEnter: '请输入',
    loginNo: '登录账号',
    password: '密码',
    rememberMe: '记住我',
    avatar: '头像',
    avatarUpload: '头像上传',
    name: '名称',
    profile: '配置项',
    label: '标签',
    key: '键',
    code: '编码',
    sort: '序号',
    level: '级别',
    parent: '上级',
    userList: '用户列表',
    roleList: '角色列表',
    selected: '已选',
    optional: '可选项',
    value: '值',
    mobile: '手机号',
    describe: '描述',
    remarks: '备注',
    info: '信息',
    action: '操作',
    invalid: '无效',
    enabled: '启用',
    disabled: '禁用',
    notEmpty: '不能为空',
    incorrect: '不正确',
    width: '宽',
    height: '高',
    old: '旧',
    new: '新',
    confirmPassword: '确认密码',
    lengthNotEnough: '长度不能小于',
    incorrectFormat: '格式不正确',
    passwordNotEqual: '两次输入的密码不相等',
    scope: '权限范围',
    accessTokenValiditySeconds: 'token有效期',
    refreshTokenValiditySeconds: 'refreshToken有效期',
    seconds: '秒',
    millisecond: '毫秒',
    organization: '机构',
    role: '角色',
    menu: '菜单',
    clientName: '客户端名称',
    user: '用户',
    moduleFunc: '模块功能',
    basicInfo: '基本信息',
    menuList: '菜单列表',
    orgList: '机构列表',
    orgMngList: '可管理的机构',
    moduleFuncList: '模块功能列表',
    iconType: '图标',
    path: '路径',
    openType: '打开方式',
    inner: '内嵌模式',
    newTabs: '新标签页',
    status: '状态',
    startDate: '开始日期',
    endDate: '结束日期',
    startDateCantGreaterThenEndDate: '开始日期不能大于结束日期',
    routeId: '路由ID',
    uri: 'uri',
    predicates: '断言',
    filters: '过滤器',
    metadata: '元数据',
    remoteIp: '客户端IP',
    gatewayIp: '网关IP',
    serverId: '服务ID',
    targetUri: '目标URL',
    requestTime: '请求时间',
    processTime: '处理时长',
    responseTime: '响应时间',
    responseStatus: '响应状态码',
    historyInfo: '历史信息',
    currentInfo: '当前信息',
    infoType: '信息类型',
    targetIp: '目标服务IP',
    targetPath: '目标服务路径',
    method: '请求方法',
    token: '请求token',
    clientId: '客户端ID',
    identify: '标识',
    userName: '用户名称',
    configRefreshServer: '服务名',
    configRefreshMatcher: '匹配表达式',
    configRefreshMatcherDescribe: '请在下方输入服务ID的匹配表达式（模糊匹配可用"**"），服务ID格式如下：',
    configRefreshAll: '所有服务',
    resourceName: '资源名称',
    content: '内容',
    version: '版本',
    createTime: '创建时间',
    modifyTime: '修改时间',
    deployTime: '部署时间',
    execTime: '执行时间',
    execUserName: '执行人',
    createUserName: '创建人',
    processKey: '流程定义键',
    processInstanceId: '流程实例ID',
    processBusinessKey: '流程业务键',
    flowStatus: '流程状态',
    running: '运行中',
    ended: '已结束',
    beginTime: '开始时间',
    finishTime: '完成时间',
    flowName: '流程名称',
    title: '标题',
    description: '描述',
    deleteReason: '删除原因',
    startUser: '发起人',
    currentUser: '当前处理人',
    processUser: '处理人',
    isPass: '是否通过',
    isFinished: '是否已完成',
    yes: '是',
    no: '否',
    processActivityRecords: '流程处理记录',
    comment: '意见',
    processParams: '流程变量',
    type: '类型',
    processFile: '流程文件',
    filterKey: '过滤关键字',
    area: '区域',
    fold: '文件夹',
    buttons: {
      login: '登录',
      submit: '提交',
      search: '查询',
      edit: '编辑',
      update: '更新',
      save: '保存',
      delete: '删除',
      cancel: '取消',
      add: '新增',
      newFold: '新建文件夹',
      reset: '重置',
      upload: '上传',
      view: '查看',
      image: '图片',
      free: '自定义',
      updateSecret: '更新密钥',
      select: '选择',
      deSelect: '取消选择',
      refresh: '刷新',
      resetPwd: '重置密码',
      refreshService: '刷新服务',
      refreshRoute: '刷新路由',
      chooseFile: '选择文件',
      downLoadFile: '文件下载',
      fileManager: '文件管理',
      deploy: '部署',
      execute: '执行',
      lastWeek: '最近一周',
      lastMonth: '最近一个月',
      lastThreeMonth: '最近三个月'
    }
  }
})

export default messages
