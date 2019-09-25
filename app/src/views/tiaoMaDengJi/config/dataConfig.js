export default {
  timer: null,
  // 表单验证
  ruleInfor: {
    name: [
      { required: true, type: 'string', message: '请输入姓名', trigger: 'blur' }
    ],
    age: [
      { required: true, type: 'string', message: '请输入年龄', trigger: 'blur' },
      { type: 'string', pattern: /^((1[0-5])|[1-9])?\d$/, message: '年龄有误', trigger: 'blur' }
    ],
    sex: [
      { required: true, type: 'number', message: '请输入性别', trigger: 'blur' }
    ],
    nation: [
      { required: true, type: 'string', message: '请输入民族', trigger: 'blur' }
    ],
    location: [
      { required: true, type: 'string', message: '请输入户籍地址', trigger: 'blur' }
    ],
    cardNum: [
      { required: true, type: 'string', message: '请输入身份证号码', trigger: 'blur' },
      { type: 'string', pattern: /^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$|^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/, message: '身份证填写有误', trigger: 'blur' }
    ],
    birth: [
      { required: true, message: '请输入出生日期', trigger: 'blur', pattern: /.+/ }
    ],
    Iphone: [
      { required: true, type: 'string', message: '请输入本人电话', trigger: 'blur' },
      { type: 'string', pattern: /^1([38][0-9]|4[579]|5[0-3,5-9]|6[6]|7[0135678]|9[89])\d{8}$/, message: '手机号码格式有误', trigger: 'blur' }
    ],
    dutyDoctor: [
      { required: true, type: 'string', message: '责任医生不能为空', trigger: 'blur' }
    ],
    nowLocation: [
      { required: true, type: 'string', message: '现住地址不能为空', trigger: 'blur' }
    ],
    emergencyName: [
      { required: true, type: 'string', message: '紧急联系人不能为空', trigger: 'blur' }
    ],
    emergencyPhone: [
      { required: true, type: 'string', message: '紧急联系人电话不能为空', trigger: 'blur' },
      { type: 'string', pattern: /^1([38][0-9]|4[579]|5[0-3,5-9]|6[6]|7[0135678]|9[89])\d{8}$/, message: '手机号码格式有误', trigger: 'blur' }
    ],
    PersonnelType: [
      { required: true, type: 'array', min: 1, message: '人员类型不能为空', trigger: 'change' }
    ]
  },
  // 人员类型config
  PersonnelTypeConfig: ['低保', '脑卒中', '普通人', '残疾人', '重精', '糖尿病', '糖尿病高危',
    '60-65岁', '贫困', '高血压', '冠心病', '高血压高危',
    '五保', '老年人', '计生特殊人群'],
  // 民族列表
  nationList: [{ value: '汉族' }, { value: '壮族' }, { value: '满族' }, { value: '回族 ' }, { value: '苗族' }, { value: '维吾尔族 ' }, { value: '土家族' }, { value: '彝族' }, { value: '蒙古族' }, { value: '藏族' }, { value: '布依族' }, { value: '侗族' }, { value: '瑶族' }, { value: '朝鲜族  ' }, { value: '白族' }, { value: '哈尼族' }, { value: '哈萨克族' }, { value: '黎族' }, { value: '傣族' }, { value: '畲族' }, { value: '傈僳族  ' }, { value: '仡佬族' }, { value: '东乡族' }, { value: '高山族' }, { value: '拉祜族' }, { value: '水族' }, { value: '佤族' }, { value: '纳西族  ' }, { value: '羌族' }, { value: '土族' }, { value: '仫佬族' }, { value: '锡伯族' }, { value: '柯尔克孜族' }, { value: '达斡尔族' }, { value: '景颇族  ' }, { value: '毛南族' }, { value: '撒拉族' }, { value: '布朗族' }, { value: '塔吉克族' }, { value: '阿昌族' }, { value: '普米族' }, { value: '鄂温克族  ' }, { value: '怒族' }, { value: '京族' }, { value: '基诺族' }, { value: '德昂族' }, { value: '保安族' }, { value: '俄罗斯族' }, { value: '裕固族  ' }, { value: '乌兹别克族' }, { value: '门巴族' }, { value: '鄂伦春族' }, { value: '独龙族' }, { value: '塔塔尔族' }, { value: '赫哲族' }, { value: '珞巴族' }, { value: '外国血统' }, { value: '其他' }],
  id: '',
  type: 0,
  dah: '',
  index_no: '',
  tjrq: '',
  year: '',
  org_id: '',
  org_name: '',
  up_msg: '',
  village_id: '',
  village_name: '',
  zjz_url: '',
  zjz_url_flag: 0,
  qm_url: '',
  qm_url_flag: 0,
  zw_url: '',
  zw_url_flag: 0,
  xcz_url: '',
  xcz_url_flag: 0,
  create_time: '',
  create_user_name: '',
  create_user_id: '',
  qx_info: '',

  inforCollec: {
    name: '',
    age: '',
    sex: '',
    nation: '',
    birth: '',
    location: '',
    cardNum: '110101201803075363',
    Iphone: '',
    dutyDoctor: '',
    nowLocation: '',
    emergencyName: '',
    emergencyPhone: '',
    PersonnelType: []
  },

  
 
  // 拍照相关数据
  localUpload: false,
  cameraUpload: false,
  imageUrl: '',
  hasImage: '',
  photoOk: '',
  video: undefined,
  canvas: undefined,
  mediaStream: undefined
  // 拍照相关数据

}
