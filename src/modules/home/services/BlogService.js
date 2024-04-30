import blog1 from '@/assets/images/blog1.svg'
import blog2 from '@/assets/images/blog2.svg'
import blog3 from '@/assets/images/blog3.svg'

export const BlogService = {
  getProductsData() {
    return [
      {
        image: blog1,
        title: 'نص مؤقت',
        date: 'يناير 23 , 2024',
        text: 'نظام POS متعدد الاستخدامات الخاص بنا هو الحل الأمثل لإدارة أعمالك بكفاءة ومرونة. سواء كنت تدير مطعماً، متجراً للبيع بالتجزئة. نظام POS متعدد الاستخدامات الخاص بنا هو',
      },
      {
        image: blog2,
        title: 'نص مؤقت',
        date: 'يناير 23 , 2024',
        text: 'نظام POS متعدد الاستخدامات الخاص بنا هو الحل الأمثل لإدارة أعمالك بكفاءة ومرونة. سواء كنت تدير مطعماً، متجراً للبيع بالتجزئة. نظام POS متعدد الاستخدامات الخاص بنا هو',
      },
      {
        image: blog3,
        title: 'نص مؤقت',
        date: 'يناير 23 , 2024',
        text: 'نظام POS متعدد الاستخدامات الخاص بنا هو الحل الأمثل لإدارة أعمالك بكفاءة ومرونة. سواء كنت تدير مطعماً، متجراً للبيع بالتجزئة. نظام POS متعدد الاستخدامات الخاص بنا هو',
      },
      {
        image: blog2,
        title: 'نص مؤقت',
        date: 'يناير 23 , 2024',
        text: 'نظام POS متعدد الاستخدامات الخاص بنا هو الحل الأمثل لإدارة أعمالك بكفاءة ومرونة. سواء كنت تدير مطعماً، متجراً للبيع بالتجزئة. نظام POS متعدد الاستخدامات الخاص بنا هو',
      },
      {
        image: blog1,
        title: 'نص مؤقت',
        date: 'يناير 23 , 2024',
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
