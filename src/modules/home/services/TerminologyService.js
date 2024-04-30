import system2 from '@/assets/images/system2.svg'
import system3 from '@/assets/images/system3.svg'

export const TerminologyService = {
  getProductsData() {
    return [
      {
        image: system3,
        title: '1 نص مؤقت',

        text: 'نظام POS متعدد الاستخدامات الخاص بنا هو الحل الأمثل لإدارة أعمالك بكفاءة ومرونة. سواء كنت تدير مطعماً، متجراً للبيع بالتجزئة. نظام POS متعدد الاستخدامات الخاص بنا هو',
      },
      {
        image: system2,
        title: '2 نص مؤقت',

        text: 'نظام POS متعدد الاستخدامات الخاص بنا هو الحل الأمثل لإدارة أعمالك بكفاءة ومرونة. سواء كنت تدير مطعماً، متجراً للبيع بالتجزئة. نظام POS متعدد الاستخدامات الخاص بنا هو',
      },
      {
        image: system3,
        title: 'نص مؤقت',

        text: 'نظام POS متعدد الاستخدامات الخاص بنا هو الحل الأمثل لإدارة أعمالك بكفاءة ومرونة. سواء كنت تدير مطعماً، متجراً للبيع بالتجزئة. نظام POS متعدد الاستخدامات الخاص بنا هو',
      },
      {
        image: system2,
        title: 'نص مؤقت',

        text: 'نظام POS متعدد الاستخدامات الخاص بنا هو الحل الأمثل لإدارة أعمالك بكفاءة ومرونة. سواء كنت تدير مطعماً، متجراً للبيع بالتجزئة. نظام POS متعدد الاستخدامات الخاص بنا هو',
      },
      {
        image: system3,
        title: 'نص مؤقت',

        text: 'نظام POS متعدد الاستخدامات الخاص بنا هو الحل الأمثل لإدارة أعمالك بكفاءة ومرونة. سواء كنت تدير مطعماً، متجراً للبيع بالتجزئة. نظام POS متعدد الاستخدامات الخاص بنا هو',
      },
    ]
  },

  getProductsMini() {
    return Promise.resolve(this.getProductsData().slice(0, 5))
  },

  getProductsSmall() {
    return Promise.resolve(this.getProductsData().slice(0, 10))
  },

  getProducts() {
    return Promise.resolve(this.getProductsData())
  },
}
