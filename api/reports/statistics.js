const { MaritalStatusSchema, MembershipSchema, MemberSchema, SocietySchema, SectionSchema } = require('../../api/schemas/memberSchema');

let statisticsData = []

function processStats( name, value) {
  statisticsData.push({'name': name, 'count': value})
  return
}

const total_members = async () => {
    try {
      const total_members = await MemberSchema.findAndCountAll({})
      processStats('Total Church Members', total_members.count)
      return
    } catch (error) {
      return error;
    }
}

const mumcStats = async () => {
    try {
      const total_mumc_members = await MemberSchema.findAndCountAll({
        include: [
          { model: SocietySchema, where: {title: ['mumc-full', 'mumc-probation'] }}
        ],
      })
      processStats('Total MUMC Members', total_mumc_members.count)

      const total_mumc_full_members = await MemberSchema.findAndCountAll({
        include: [
          { model: SocietySchema, where: { title: 'mumc-full' } }
        ],
      })
      processStats('Total Full MUMC Members', total_mumc_full_members.count)

      const total_mumc_probation_members = await MemberSchema.findAndCountAll({
        include: [
          { model: SocietySchema, where: { title: 'mumc-probation' } }
        ],
      })
      processStats('Total Probation MUMC Members', total_mumc_probation_members.count)

      return
    } catch (error) {
      return error;
    }
}

const rrwStats = async () => {
    try {
      const total_rrw_members = await MemberSchema.findAndCountAll({
        include: [
          { model: SocietySchema, where: {title: ['rrw-full', 'rrw-probation'] }}
        ],
      })
      processStats('Total RRW Members', total_rrw_members.count)

      const total_rrw_full_members = await MemberSchema.findAndCountAll({
        include: [
          { model: SocietySchema, where: { title: 'rrw-full' } }
        ],
      })
      processStats('Total Full RRW Members', total_rrw_full_members.count)

      const total_rrw_probation_members = await MemberSchema.findAndCountAll({
        include: [
          { model: SocietySchema, where: { title: 'rrw-probation' } }
        ],
      })
      processStats('Total Probation RRW Members', total_rrw_probation_members.count)

      return
    } catch (error) {
      return error;
    }
}

const umyfStats = async () => {
    try {
      const total_umyf_members = await MemberSchema.findAndCountAll({
        include: [
          { model: SocietySchema, where: {title: ['umyf-full', 'umyf-probation'] }}
        ],
      })
      processStats('Total UMYF Members', total_umyf_members.count)

      const total_umyf_full_members = await MemberSchema.findAndCountAll({
        include: [
          { model: SocietySchema, where: { title: 'umyf-full' } }
        ],
      })
      processStats('Total Full UMYF Members', total_umyf_full_members.count)

      const total_umyf_probation_members = await MemberSchema.findAndCountAll({
        include: [
          { model: SocietySchema, where: { title: 'umyf-probation' } }
        ],
      })
      processStats('Total Probation UMYF Members', total_umyf_probation_members.count)

      return
    } catch (error) {
      return error;
    }
}

const jcStats = async () => {
    try {
      const total_jc_members = await MemberSchema.findAndCountAll({
        include: [
          { model: SocietySchema, where: {title: ['jc-b', 'jc-nb']}}
        ],
      })
      processStats('Total JC Members', total_jc_members.count)

      const total_jc_b_members = await MemberSchema.findAndCountAll({
        include: [
          { model: SocietySchema, where: { title: 'jc-b' } }
        ],
      })
      processStats('Total Baptised JC Members', total_jc_b_members.count)

      const total_jc_nb_members = await MemberSchema.findAndCountAll({
        include: [
          { model: SocietySchema, where: { title: 'jc-nb' } }
        ],
      })
      processStats('Total Not Baptised JC Members', total_jc_nb_members.count)

      return
    } catch (error) {
      return error;
    }
}

const genderStats = async () => {
  try {
    const males = await MemberSchema.findAndCountAll({where: {gender: 'male'}})
    processStats('Males', males.count)

    const females = await MemberSchema.findAndCountAll({where: {gender: 'female'}})
    processStats('Females', females.count)
  } catch (error) {
    return error
  }
}

const membershipStats = async () => {
  try {
    const full = await MemberSchema.findAndCountAll({
      include: [
        {model: MembershipSchema, where: {title: 'full'}}
      ]
    })
    processStats('Full Members', full.count)

    const probation = await MemberSchema.findAndCountAll({
      include: [
        {model: MembershipSchema, where: {title: 'probation'}}
      ]
    })
    processStats('Probation Members', probation.count)
  } catch (error) {
    return error
  }
}

const maritalStats = async () => {
  try {
    const single = await MemberSchema.findAndCountAll({
      include: [
        {model: MaritalStatusSchema, where: {title: 'single'}}
      ]
    })
    processStats('Singles', single.count)

    const married = await MemberSchema.findAndCountAll({
      include: [
        {model: MaritalStatusSchema, where: {title: 'married'}}
      ]
    })
    processStats('Married', married.count)

    const divorced = await MemberSchema.findAndCountAll({
      include: [
        {model: MaritalStatusSchema, where: {title: 'divorced'}}
      ]
    })
    processStats('Divorced', divorced.count)

    const widow = await MemberSchema.findAndCountAll({
      include: [
        {model: MaritalStatusSchema, where: {title: 'widow'}}
      ]
    })
    processStats('Widows', widow.count)

    const widower = await MemberSchema.findAndCountAll({
      include: [
        {model: MaritalStatusSchema, where: {title: 'widower'}}
      ]
    })
    processStats('Widowers', widower.count)
  } catch (error) {
    return error
  }
}

async function getStats() {
  statisticsData = []
  await total_members()
  await mumcStats()
  await rrwStats()
  await umyfStats()
  await jcStats()
  await genderStats()
  await membershipStats()
  await maritalStats()
  console.log(statisticsData);
  return statisticsData
}

export { getStats }