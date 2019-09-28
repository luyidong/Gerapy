export default {
	objects: {
		client: '主机',
		clients: '主机',
		project: '项目',
		projects: '项目',
		spider: '爬虫',
		spiders: '爬虫',
		job: '任务',
		jobs: '任务',
		log: '日志',
		logs: '日志',
		item: '实体',
		items: '实体',
		task: '任务',
		tasks: '任务',
	},
	buttons: {
		refresh: '刷新',
		confirm: '确定',
		yes: '是',
		render: '渲染',
		copy: '复制',
		no: '否',
		save: '保存',
		create: '创建',
		delete: '删除',
		normal: '正常',
		edit: '编辑',
		error: '错误',
		schedule: '调度',
		batchDelete: '批量删除',
		connecting: '连接中',
		return: '返回',
		run: '运行',
		finished: '完成',
		pending: '等待',
		running: '运行中',
		stop: '停止',
		cancel: '取消',
		configure: '配置',
		deploy: '部署',
		rename: '重命名',
		batchDeploy: '批量部署',
		build: '打包',
		re: '重新',
		add: '添加',
		update: '更新',
		generate: '生成',
		addItem: '添加实体',
		addColumn: '添加字段',
		addRule: '添加规则',
		addSpider: '添加爬虫',
		addUrl: '添加链接',
		addDomain: '添加域名',
		addAttr: '添加属性',
		addExtractor: '添加解析器',
		addTable: '添加表映射',
		addCollection: '添加集合映射',
		status: '状态',
		nextTime: '下次执行'
	},
	heads: {
		home: '首页',
		clientIndex: '主机列表',
		clientCreate: '主机创建',
		clientEdit: '主机编辑',
		clientSchedule: '主机调度',
		projectIndex: '项目列表',
		projectEdit: '项目编辑',
		projectDeploy: '项目部署',
		projectConfigure: '项目配置',
		taskIndex: '任务列表',
		taskCreate: '任务创建',
		taskEdit: '任务编辑',
		taskStatus: '任务状态'
	},
	titles: {
		createClient: '创建主机',
		deployProject: '部署项目',
		buildProject: '打包项目',
		configureProject: '配置项目',
		project: '项目',
		listSpider: '爬虫列表',
		client: '主机',
		item: '实体',
		items: '实体',
		rule: '规则',
		rules: '规则',
		extractor: '解析器',
		extractors: '解析器',
		selectConfig: '选择配置',
		selectItem: '选择实体',
		callback: '回调',
		storage: '存储',
		newFile: '新建',
		renameFile: '重命名',
		createFile: '新建',
		browser: '浏览器',
		error: '错误',
		proxy: '代理',
		cookies: 'Cookies',
		createTask: '创建任务',
		editTask: '编辑任务',
		field: '字段',
		column: '字段',
	},
	menus: {
		clients: '主机管理',
		projects: '项目管理',
		tasks: '任务管理',
	},
	messages: {
		loading: '加载中...',
		noData: '暂无数据',
		enter: '请添加',
		isNull: '不能为空',
		notValid: '不合法',
		emptyDescription: '描述不能为空',
		notBuilt: '未打包',
		addColumn: '请添加字段',
		successAdd: '添加成功',
		successSave: '保存成功',
		successDelete: '删除成功',
		successCancel: '取消成功',
		successRun: '启动成功',
		successGenerate: '生成成功',
		successBuild: '打包成功',
		successDeploy: '部署成功',
		successCopy: '复制成功',
		errorAdd: '添加失败',
		errorSave: '保存失败',
		errorDelete: '删除失败',
		errorCancel: '取消失败',
		errorRun: '运行失败',
		errorGenerate: '生成失败',
		errorBuild: '打包失败',
		errorDeploy: '部署失败',
		errorLoad: '加载失败',
		errorFormat: '格式有误',
		errorCopy: '复制失败',
		processGenerate: '正在生成代码',
		confirm: '确定要执行此操作?',
		reGenerate: '重新生成代码会清除之前的打包，确定要重新生成吗？',
		canceling: '正在取消，请稍后',
		buildFirst: '请先打包项目',
		loadError: '加载失败',
		select: '请选择',
		errorParse: '解析失败'
	},
	descriptions: {
		normalClients: '主机正常运行',
		errorClients: '主机连接失败',
		countProjects: '项目',
		notGenerated: '未生成',
		chooseDateTime: '选择日期时间',
		executedJobs: '任务执行成功',
		errorJobs: '任务执行失败',
		toNextTask: '距离下次任务进度',
		successRate: '成功率',
	},
	columns: {
		id: 'ID',
		status: '状态',
		name: '名称',
		ip: 'IP',
		value: '值',
		url: '链接',
		operations: '操作',
		jobID: '任务',
		spiderName: '爬虫名称',
		startTime: '开始时间',
		endTime: '结束时间',
		description: '描述',
		built: '打包',
		deployed: '部署',
		configurable: '可配置',
		builtAt: '打包时间',
		deployedAt: '部署时间',
		packageName: '打包名称',
		projectName: '项目名称',
		generateCode: '生成代码',
		column: '字段',
		allowedDomains: '合法域名',
		startUrls: '起始连接',
		innerCode: '类内代码',
		outerCode: '类外代码',
		customSettings: '通用配置',
		classAttrs: '类属性',
		outProcessor: '输出处理',
		inProcessor: '输入处理',
		method: '方法',
		regex: '正则',
		processors: '处理器',
		attrName: '属性名',
		attrValue: '属性值',
		list: '列表',
		code: '代码',
		port: '端口',
		host: '地址',
		table: '表名',
		tables: '表名',
		collection: '集合名',
		collections: '集合名',
		database: '数据库',
		user: '用户名',
		username: '用户名',
		password: '密码',
		auth: '认证',
		spider: '爬虫',
		project: '项目',
		clients: '主机',
		trigger: '调度方式',
		year: '年',
		years: '年',
		month: '月',
		months: '月',
		week: '周',
		weeks: '周',
		day: '天',
		days: '天',
		hour: '时',
		hours: '时',
		minute: '分',
		minutes: '分',
		second: '秒',
		seconds: '秒',
		startDate: '开始日期',
		endDate: '结束日期',
		runDate: '运行时间',
		dayOfWeek: '每周几',
		uri: '连接串',
		proxyPool: '代理池',
		cookiesPool: 'Cookies池',
		failTimes: '失败次数',
		timezone: '时区',
		nextTime: '下次执行',
		lastTime: '上次执行',
		success: '成功',
		error: '错误'
	},

}
