const SERVICES = [
  { id: 'p1', title: '精致证件照', type: '证件照', price: 99, imageUrl: 'https://cdn.yhalo.cn/yingdong-yunshan/%E7%B2%BE%E4%BF%AE%E8%AF%81%E4%BB%B6%E7%85%A7.jpg', tags: ['含妆造', '立等可取'], description: '含化妆、精修、底片赠送。适合求职、考研、简历。' },
  { id: 'p2', title: '基础证件照', type: '证件照', price: 69, imageUrl: 'https://cdn.yhalo.cn/yingdong-yunshan/%E5%9F%BA%E7%A1%80%E8%AF%81%E4%BB%B6%E7%85%A7.jpg', tags: ['性价比', '快速'], description: '不含化妆，精修底片。快速标准化拍摄。' },
  { id: 'p3', title: '毕业季单人写真', type: '毕业照', price: 199, imageUrl: 'https://cdn.yhalo.cn/yingdong-yunshan/%E6%AF%95%E4%B8%9A%E5%AD%A3%E5%8D%95%E4%BA%BA%E5%86%99%E7%9C%9F.jpg', tags: ['云大特色', '热门'], description: '校园场景任选（银杏道/钟楼），精修9张。' },
  { id: 'p4', title: '毕业季小团体套餐', type: '毕业照', price: 200, unit: '/人', imageUrl: 'https://cdn.yhalo.cn/yingdong-yunshan/%E6%AF%95%E4%B8%9A%E5%AD%A3%E5%B0%8F%E5%9B%A2%E4%BD%93%E5%A5%97%E9%A4%90.jpg', tags: ['宿舍首选', '含服装'], description: '3-5人成团，含学士服租赁，精修20张。' },
  { id: 'p5', title: '校园情绪写真', type: '写真', price: 199, imageUrl: 'https://cdn.yhalo.cn/yingdong-yunshan/%E6%A0%A1%E5%9B%AD%E6%83%85%E7%BB%AA%E5%86%99%E7%9C%9F.jpeg', tags: ['胶片感', '生活化'], description: '日系/胶片风，1小时拍摄，底片全送。' },
  { id: 'p6', title: '晚会活动跟拍', type: '活动跟拍', price: 800, unit: '/场', imageUrl: 'https://cdn.yhalo.cn/yingdong-yunshan/%E6%99%9A%E4%BC%9A%E6%B4%BB%E5%8A%A8%E8%B7%9F%E6%8B%8D.jpg', tags: ['专业设备', '社团优惠'], description: '全程跟拍，修图50张+，适合社团/晚会。' }
];

const RENTAL_EQUIPMENT = [
  { id: 'e1', name: '佳能eos r50', category: '相机', price: 50, unit: '/天', imageUrl: 'https://cdn.yhalo.cn/yingdong-yunshan/%E4%BD%B3%E8%83%BDeos%20r50.jpeg', deposit: '押金400', stock: 5, description: '一款轻量化微单相机，主打便携性与Vlog拍摄功能。机身重量仅382克（含电池），配备2420万像素APS-C画幅传感器，支持4K无裁切视频拍摄和15张/秒连拍‌。翻转触摸屏设计方便自拍，全像素双核对焦系统可精准追踪人眼和动物眼‌。' },
  { id: 'e2', name: '影石x4', category: '相机', price: 150, unit: '/天', imageUrl: 'https://cdn.yhalo.cn/yingdong-yunshan/%E5%BD%B1%E7%9F%B3x4.jpeg', deposit: '押金500', stock: 2, description: '8K旗舰全景运动相机，裸机重209克，支持10米防水和可更换电池设计，配备2.5英寸触摸屏‌。支持5.7K60fps高速拍摄和4K100帧慢动作，FlowState防抖‌，配合360°水平矫正功能，适合滑雪、骑行等运动场景。' },
  { id: 'e3', name: '大疆action5 pro', category: '相机', price: 80, unit: '/天', imageUrl: 'https://cdn.yhalo.cn/yingdong-yunshan/%E5%A4%A7%E7%96%86action5.jpg', deposit: '押金300', stock: 8, description: '超旗舰运动相机，搭载1/1.3英寸传感器，支持4小时续航和‌4K/120fps录制，‌裸机防水20米，适合户外创作者使用。' },
  { id: 'e4', name: '便携三脚架', category: '配件', price: 20, unit: '/天', imageUrl: 'https://cdn.yhalo.cn/yingdong-yunshan/%E4%BE%BF%E6%90%BA%E4%B8%89%E8%84%9A%E6%9E%B6.jpg', deposit: '免押金', stock: 10, description: '轻便稳固，适合夜景拍摄。' }
];

const RENTAL_COSTUMES = [
  { id: 'c1', name: '标准学士服', category: '服装', price: 30,deposit: '押金200', unit: '/天', imageUrl: 'https://cdn.yhalo.cn/yingdong-yunshan/%E6%A0%87%E5%87%86%E5%AD%A6%E5%A3%AB%E6%9C%8D.jpg', stock: 50, description: '包含学位帽、流苏、学士袍、垂布。' },
  { id: 'c2', name: '传统汉服', category: '服装', price: 50,deposit: '押金200', unit: '/天', imageUrl: 'https://cdn.yhalo.cn/yingdong-yunshan/%E4%BC%A0%E7%BB%9F%E6%B1%89%E6%9C%8D.jpeg', stock: 15, description: '魏晋风/宋制可选，含简单发饰。' },
  { id: 'c3', name: '正装西服', category: '服装', price: 40,deposit: '押金200', unit: '/天', imageUrl: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=400&h=400&fit=crop', stock: 20, description: '面试求职必备，尺码齐全。' }
];

const GALLERY_IMAGES = [
  'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=600&h=800&fit=crop',
  'https://images.unsplash.com/photo-1595152772835-219674b2a8a6?w=600&h=800&fit=crop',
  'https://images.unsplash.com/photo-1565034946487-077786996e27?w=600&h=800&fit=crop',
  'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600&h=800&fit=crop',
  'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop',
  'https://images.unsplash.com/photo-1595152772835-219674b2a8a6?w=600&h=800&fit=crop'
];

Page({
  data: {
    statusBarHeight: 20,
    navHeight: 88,
    navBodyHeight: 44,

    activeTab: 'home',
    scrollTop: 0,
    icons: {
      "camera_logo": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiNGRkZGRkYiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIj48cGF0aCBkPSJNMTQuNSA0aC01TDcgN0g0YTIgMiAwIDAgMC0yIDJ2OWEyIDIgMCAwIDAgMiAyaDE2YTIgMiAwIDAgMCAyLTJWOWEyIDIgMCAwIDAtMi0yaC0zbC0yLjUtM3oiLz48Y2lyY2xlIGN4PSIxMiIgY3k9IjEzIiByPSIzIi8+PC9zdmc+",
      "search": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiNCRkRCRkUiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIj48Y2lyY2xlIGN4PSIxMSIgY3k9IjExIiByPSI4Ii8+PHBhdGggZD0ibTIxIDIxLTQuMy00LjMiLz48L3N2Zz4=",
      // ✅ 新增：搜索空状态用的浅色图标
      "search_gray": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiNCRkRCRkUiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIj48Y2lyY2xlIGN4PSIxMSIgY3k9IjExIiByPSI4Ii8+PHBhdGggZD0ibTIxIDIxLTQuMy00LjMiLz48L3N2Zz4=",
      "x_white": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiNGRkZGRkYiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIj48cGF0aCBkPSJNMTggNiA2IDE4Ii8+PHBhdGggZD0ibTYgNiAxOCAxMiIvPjwvc3ZnPg==",
      "x_gray": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiM5Q0EzQUYiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIj48cGF0aCBkPSJNMTggNiA2IDE4Ii8+PHBhdGggZD0ibTYgNiAxOCAxMiIvPjwvc3ZnPg==",
      "chevron_right": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiNEMUQ1REIiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIj48cGF0aCBkPSJtOSAxOCA2LTYtNi02Ii8+PC9zdmc+",
      "chevron_left_white": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiNGRkZGRkYiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIj48cGF0aCBkPSJtMTUgMTgtNi02IDYtNiIvPjwvc3ZnPg==",
      "plus": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiMyNTYzRUIiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIj48cGF0aCBkPSJNNSAxMmgxNCIvPjxwYXRoIGQ9Ik0xMiA1djE0Ii8+PC9zdmc+",
      "trash": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiM5Q0EzQUYiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIj48cGF0aCBkPSJNMyA2aDE4Ii8+PHBhdGggZD0iTTE5IDZ2MTRjMCAxLTEgMi0yIDJIN2MtMSAwLTItMS0yLTJWNiIvPjxwYXRoIGQ9Ik04IDZWNGMwLTEgMS0yIDItMmg0YzEgMCAyIDEgMiAydjIiLz48bGluZSB4MT0iMTAiIHgyPSIxMCIgeTE9IjExIiB5Mj0iMTciLz48bGluZSB4MT0iMTQiIHgyPSIxNCIgeTE9IjExIiB5Mj0iMTciLz48L3N2Zz4=",
      "empty": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0OCIgaGVpZ2h0PSI0OCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiNFNUU3RUIiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIj48Y2lyY2xlIGN4PSIxMSIgY3k9IjExIiByPSI4Ii8+PHBhdGggZD0ibTIxIDIxLTQuMy00LjMiLz48L3N2Zz4=",
      "camera_add": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiNGRkZGRkYiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIj48cGF0aCBkPSJNMjMgMTlhMiAyIDAgMCAxLTIgMkgzYTIgMiAwIDAgMS0yLTJWOGEyIDIgMCAwIDEgMi0yaDRsMi0zaDZsMiAzaDRhMiAyIDAgMCAxIDIgMnoiLz48Y2lyY2xlIGN4PSIxMiIgY3k9IjEzIiByPSI0Ii8+PC9zdmc+",
      "phone": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiMyNTYzRUIiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIj48cGF0aCBkPSJNMjIgMTYuOTJ2M2EyIDIgMCAwIDEtMi4xOCAyIDE5Ljc5IDE5Ljc5IDAgMCAxLTguNjMtMy4wNyAxOS41IDE5LjUgMCAwIDEtNi02IDE5Ljc5IDE5Ljc5IDAgMCAxLTMuMDctOC42N0EyIDIgMCAwIDEgNC4xMSAyaDNhMiAyIDAgMCAxIDIgMS43MiAxMi44NCAxMi44NCAwIDAgMCAuNyAyLjgxIDIgMiAwIDAgMS0uNDUgMi4xMUw4LjA5IDkuOTFhMTYgMTYgMCAwIDAgNiA2bDEuMjctMS4yN2EyIDIgMCAwIDEgMi4xMS0uNDUgMTIuODQgMTIuODQgMCAwIDAgMi44MS43QTIgMiAwIDAgMSAyMiAxNi45MnoiLz48L3N2Zz4=",
      "heart": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiM5Q0EzQUYiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIj48cGF0aCBkPSJNMTkgMTRjMS40OS0xLjQ2IDMtMy4yMSAzLTUuNUE1LjUgNS41IDAgMCAwIDE2LjUgM2MtMS43NiAwLTMgLjUtNC41IDItMS41LTEuNS0yLjc0LTItNC41LTJBNS41IDUuNSAwIDAgMCAyIDguNWMwIDIuMyAxLjUgNC4wNSAzIDUuNWw3IDdaIi8+PC9zdmc+",
      "heart_fill": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSIjRUY0NDQ0IiBzdHJva2U9IiNFRjQ0NDQiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIj48cGF0aCBkPSJNMTkgMTRjMS40OS0xLjQ2IDMtMy4yMSAzLTUuNUE1LjUgNS41IDAgMCAwIDE2LjUgM2MtMS43NiAwLTMgLjUtNC41IDItMS41LTEuNS0yLjc0LTItNC41LTJBNS41IDUuNSAwIDAgMCAyIDguNWMwIDIuMyAxLjUgNC4wNSAzIDUuNWw3IDdaIi8+PC9zdmc+",
      "check": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiMyNTYzRUIiIHN0cm9rZS13aWR0aD0iMyIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIj48cG9seWxpbmUgcG9pbnRzPSIyMCA2IDkgMTcgNCAxMiIvPjwvc3ZnPg==",
      "wallet_add": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiNGRkZGRkYiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIj48cmVjdCB3aWR0aD0iMjAiIGhlaWdodD0iMTQiIHg9IjIiIHk9IjUiIHJ4PSIyIi8+PGxpbmUgeDE9IjIiIHgyPSIyMiIgeTE9IjEwIiB5Mj0iMTAiLz48bGluZSB4MT0iMTIiIHgyPSIxMiIgeTE9IjE1IiB5Mj0iMTUiLz48L3N2Zz4=",
      "home": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiM5Q0EzQUYiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIj48cGF0aCBkPSJtMyA5IDktNyA5IDd2MTFhMiAyIDAgMCAxLTIgMkg1YTIgMiAwIDAgMS0yLTJ6Ii8+PHBvbHlsaW5lIHBvaW50cz0iOSAyMiA5IDEyIDE1IDEyIDE1IDIyIi8+PC9zdmc+",
      "home_active": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiMyNTYzRUIiIHN0cm9rZS13aWR0aD0iMi41IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiPjxwYXRoIGQ9Im0zIDkgOS03IDkgN3YxMWEyIDIgMCAwIDEtMiAySDVhMiAyIDAgMCAxLTItMnoiLz48cG9seWxpbmUgcG9pbnRzPSI5IDIyIDkgMTIgMTUgMTIgMTUgMjIiLz48L3N2Zz4=",
      "cam_tab": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiM5Q0EzQUYiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIj48cGF0aCBkPSJNMTQuNSA0aC01TDcgN0g0YTIgMiAwIDAgMC0yIDJ2OWEyIDIgMCAwIDAgMiAyaDE2YTIgMiAwIDAgMCAyLTJWOWEyIDIgMCAwIDAtMi0yaC0zbC0yLjUtM3oiLz48Y2lyY2xlIGN4PSIxMiIgY3k9IjEzIiByPSIzIi8+PC9zdmc+",
      "cam_tab_active": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiMyNTYzRUIiIHN0cm9rZS13aWR0aD0iMi41IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiPjxwYXRoIGQ9Ik0xNC41IDRoLTVMNyA3SDRhMiAyIDAgMCAwLTIgMnY5YTIgMiAwIDAgMCAyIDJoMTZhMiAyIDAgMCAwIDItMlY5YTIgMiAwIDAgMC0yLTJoLTNsLTIuNS0zeiIvPjxjaXJjbGUgY3g9IjEyIiBjeT0iMTMiIHI9IjMiLz48L3N2Zz4=",
      "bag": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiM5Q0EzQUYiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIj48cGF0aCBkPSJNNiAyIDMgNnYxNGEyIDIgMCAwIDAgMiAyaDE0YTIgMiAwIDAgMCAyLTJWNmwtMy00WiIvPjxwYXRoIGQ9Ik0zIDZoMTgiLz48cGF0aCBkPSJNMTYgMTBhNCA0IDAgMCAxLTggMCIvPjwvc3ZnPg==",
      "bag_active": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiMyNTYzRUIiIHN0cm9rZS13aWR0aD0iMi41IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiPjxwYXRoIGQ9Ik02IDIgMyA2djE0YTIgMiAwIDAgMCAyIDJoMTRhMiAyIDAgMCAwIDItMlY2bC0zLTRaIi8+PHBhdGggZD0iTTMgNmgxOCIvPjxwYXRoIGQ9Ik0xNiAxMGE0IDQgMCAwIDEtOCAwIi8+PC9zdmc+",
      "user": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiM5Q0EzQUYiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIj48cGF0aCBkPSJNMTkgMjF2LTJhNCA0IDAgMCAwLTQtNEg5YTQgNCAwIDAgMC00IDR2MiIvPjxjaXJjbGUgY3g9IjEyIiBjeT0iNyIgcj0iNCIvPjwvc3ZnPg==",
      "user_active": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiMyNTYzRUIiIHN0cm9rZS13aWR0aD0iMi41IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiPjxwYXRoIGQ9Ik0xOSAyMXYtMmE0IDQgMCAwIDAtNC00SDlhNCA0IDAgMCAwLTQgNHYyIi8+PGNpcmNsZSBjeD0iMTIiIGN5PSI3IiByPSI0Ii8+PC9zdmc+",
      "bag_white": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiNGRkZGRkYiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIj48cGF0aCBkPSJNNiAyIDMgNnYxNGEyIDIgMCAwIDAgMiAyaDE0YTIgMiAwIDAgMCAyLTJWNmwtMy00WiIvPjxwYXRoIGQ9Ik0zIDZoMTgiLz48cGF0aCBkPSJNMTYgMTBhNCA0IDAgMCAxLTggMCIvPjwvc3ZnPg==",
      "bag_blue": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiMyNTYzRUIiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIj48cGF0aCBkPSJNNiAyIDMgNnYxNGEyIDIgMCAwIDAgMiAyaDE0YTIgMiAwIDAgMCAyLTJWNmwtMy00WiIvPjxwYXRoIGQ9Ik0zIDZoMTgiLz48cGF0aCBkPSJNMTYgMTBhNCA0IDAgMCAxLTggMCIvPjwvc3ZnPg==",
      "shield": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiMxNkEzNEEiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIj48cGF0aCBkPSJNMTIgMjJzOC00IDgtMTBWNWwtOC0zLTggM3Y3YzAgNiA4IDEwIDggMTAiLz48cGF0aCBkPSJtOSAxMiAyIDIgNC00Ii8+PC9zdmc+",
      "clock": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiMyNTYzRUIiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIj48Y2lyY2xlIGN4PSIxMiIgY3k9IjEyIiByPSIxMCIvPjxwb2x5bGluZSBwb2ludHM9IjEyIDYgMTIgMTIgMTYgMTQiLz48L3N2Zz4=",
      "map_orange": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiNFQTU4MEMiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIj48cGF0aCBkPSJNMjAgMTBjMCA2LTggMTItOCAxMnMtOC02LTgtMTJhOCA4IDAgMCAxIDE2IDBaIi8+PGNpcmNsZSBjeD0iMTIiIGN5PSIxMCIgcj0iMyIvPjwvc3ZnPg==",
      "settings": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiNGRkZGRkYiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIj48Y2lyY2xlIGN4PSIxMiIgY3k9IjEyIiByPSIzIi8+PHBhdGggZD0iTTE5LjQgMTVhMS42NSAxLjY1IDAgMCAwIC4zMyAxLjgybC4wNi4wNmEyIDIgMCAwIDEgMCAyLjgzIDIgMiAwIDAgMS0yLjgzIDBsLS4wNi0uMDZhMS42NSAxLjY1IDAgMCAwLTEuODItLjMzIDEuNjUgMS42NSAwIDAgMC0xIDEuNTFWMjFhMiAyIDAgMCAxLTIgMiAyIDIgMCAwIDEtMi0ydi0uMDlBMS42NSAxLjY1IDAgMCAwIDkgMTkuNGExLjY1IDEuNjUgMCAwIDAtMS44Mi4zM2wtLjA2LjA2YTIgMiAwIDAgMS0yLjgzIDAgMiAyIDAgMCAxIDAtMi44M2wuMDYuMDZhMS42NSAxLjY1IDAgMCAwIC4zMy0xLjgyIDEuNjUgMS42NSAwIDAgMC0xLjUxLTFIM2EyIDIgMCAwIDEtMi0yIDIgMiAwIDAgMSAyLTJoLjA5QTEuNjUgMS42NSAwIDAgMCA0LjYgOWExLjY1IDEuNjUgMCAwIDAtLjMzLTEuODJsLS4wNi0uMDZhMiAyIDAgMCAxIDAtMi44MyAyIDIgMCAwIDEgMi44MyAwbC4wNi4wNmExLjY1IDEuNjUgMCAwIDAgMS44Mi4zM0g5YTEuNjUgMS42NSAwIDAgMCAxLTEuNTFWM2EyIDIgMCAwIDEgMi0yIDIgMiAwIDAgMSAyIDJ2LjA5YTEuNjUgMS42NSAwIDAgMCAxIDEuNTEgMS42NSAxLjY1IDAgMCAwIDEuODItLjMzbC4wNi0uMDZhMiAyIDAgMCAxIDIuODMgMCAyIDIgMCAwIDEgMCAyLjgzbC0uMDYuMDZhMS42NSAxLjY1IDAgMCAwLS4zMyAxLjgyVjlhMS42NSAxLjY1IDAgMCAwIDEuNTEgMUgyMWEyIDIgMCAwIDEgMiAyIDIgMiAwIDAgMS0yIDJoLS4wOWExLjY1IDEuNjUgMCAwIDAtMS41MSAxeiIvPjwvc3ZnPg==",
      "shield_white": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiNEQkVBRkUiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIj48cGF0aCBkPSJNMTIgMjJzOC00IDgtMTBWNWwtOC0zLTggM3Y3YzAgNiA4IDEwIDggMTAiLz48cGF0aCBkPSJtOSAxMiAyIDIgNC00Ii8+PC9zdmc+",
      "m_order": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiMzQjgyRjYiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIj48cGF0aCBkPSJNMTQuNSAySDZhMiAyIDAgMCAwLTIgMnYxNmEyIDIgMCAwIDAgMiAyaDEyYTIgMiAwIDAgMCAyLTJWNy41TDE0LjUgMnoiLz48cG9seWxpbmUgcG9pbnRzPSIxNCAyIDE0IDggMjAgOCIvPjxsaW5lIHgxPSIxNiIgeDI9IjgiIHkxPSIxMyIgeTI9IjEzIi8+PGxpbmUgeDE9IjE2IiB4Mj0iOCIgeTE9IjE3IiB5Mj0iMTciLz48bGluZSB4MT0iMTAiIHgyPSI4IiB5MT0iOSIgeTI9IjkiLz48L3N2Zz4=",
      "m_star": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiNGOTczMTYiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIj48cG9seWdvbiBwb2ludHM9IjEyIDIgMTUuMDkgOC4yNiAyMiA5LjI3IDE3IDE0LjE0IDE4LjE4IDIxLjAyIDEyIDE3Ljc3IDUuODIgMjEuMDIgNyAxNC4xNCAyIDkuMjcgOC45MSA4LjI2IDEyIDIiLz48L3N2Zz4=",
      "m_pin": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiMyMkM1NUUiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIj48cGF0aCBkPSJNMjAgMTBjMCA2LTggMTItOCAxMnMtOC02LTgtMTJhOCA4IDAgMCAxIDE2IDBaIi8+PGNpcmNsZSBjeD0iMTIiIGN5PSIxMCIgcj0iMyIvPjwvc3ZnPg==",
      "m_wallet": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiNBODU1RjciIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIj48cmVjdCB3aWR0aD0iMjAiIGhlaWdodD0iMTQiIHg9IjIiIHk9IjUiIHJ4PSIyIi8+PGxpbmUgeDE9IjIiIHgyPSIyMiIgeTE9IjEwIiB5Mj0iMTAiLz48L3N2Zz4=",
      "m_image": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiNFQzQ4OTkiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIj48cmVjdCB3aWR0aD0iMTgiIGhlaWdodD0iMTgiIHg9IjMiIHk9IjMiIHJ4PSIyIiByeT0iMiIvPjxjaXJjbGUgY3g9IjkiIGN5PSI5IiByPSIyIi8+PHBhdGggZD0ibTIxIDE1LTMuMDg2LTMuMDg2YTIgMiAwIDAgMC0yLjgyOCAwTDYgMjEiLz48L3N2Zz4=",
      "m_gift": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiNFRjQ0NDQiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIj48cmVjdCB4PSIzIiB5PSI4IiB3aWR0aD0iMTgiIGhlaWdodD0iNCIgcng9IjEiLz48cGF0aCBkPSJNMTIgOHYxMyIvPjxwYXRoIGQ9Ik0xOSAxMnY3YTIgMiAwIDAgMS0yIDJIN2EyIDIgMCAwIDEtMi0ydi03Ii8+PHBhdGggZD0iTTcuNSA4YTIuNSAyLjUgMCAwIDEgMC01QTQuOCA4IDAgMCAxIDEyIDhhNC44IDggMCAwIDEgNC41LTUgMi41IDIuNSAwIDAgMSAwIDUiLz48L3N2Zz4=",
      "m_help": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiNDQThBMDQiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIj48Y2lyY2xlIGN4PSIxMiIgY3k9IjEyIiByPSIxMCIvPjxsaW5lIHgxPSIxMiIgeDI9IjEyIiB5MT0iOCIgeTI9IjEyIi8+PGxpbmUgeDE9IjEyIiB4Mj0iMTIuMDEiIHkxPSIxNiIgeTI9IjE2Ii8+PC9zdmc+",
      "m_info": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiM0QjU1NjMiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIj48cGF0aCBkPSJNMTQuNSA0aC01TDcgN0g0YTIgMiAwIDAgMC0yIDJ2OWEyIDIgMCAwIDAgMiAyaDE2YTIgMiAwIDAgMCAyLTJWOWEyIDIgMCAwIDAtMi0yaC0zbC0yLjUtM3oiLz48Y2lyY2xlIGN4PSIxMiIgY3k9IjEzIiByPSIzIi8+PC9zdmc+",
      "cat_1": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiMyNTYzRUIiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIj48cGF0aCBkPSJNMTQuNSA0aC01TDcgN0g0YTIgMiAwIDAgMC0yIDJ2OWEyIDIgMCAwIDAgMiAyaDE2YTIgMiAwIDAgMCAyLTJWOWEyIDIgMCAwIDAtMi0yaC0zbC0yLjUtM3oiLz48Y2lyY2xlIGN4PSIxMiIgY3k9IjEzIiByPSIzIi8+PC9zdmc+",
      "cat_2": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiNFQTU4MEMiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIj48cGF0aCBkPSJNNiAyIDMgNnYxNGEyIDIgMCAwIDAgMiAyaDE0YTIgMiAwIDAgMCAyLTJWNmwtMy00WiIvPjxwYXRoIGQ9Ik0zIDZoMTgiLz48cGF0aCBkPSJNMTYgMTBhNCA0IDAgMCAxLTggMCIvPjwvc3ZnPg==",
      "cat_3": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiM5MzMzRUEiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIj48cGF0aCBkPSJNMTkgMjF2LTJhNCA0IDAgMCAwLTQtNEg5YTQgNCAwIDAgMC00IDR2MiIvPjxjaXJjbGUgY3g9IjEyIiBjeT0iNyIgcj0iNCIvPjwvc3ZnPg==",
      "cat_4": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiNEQjI3NzciIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIj48cmVjdCB3aWR0aD0iMTgiIGhlaWdodD0iMTgiIHg9IjMiIHk9IjMiIHJ4PSIyIiByeT0iMiIvPjxjaXJjbGUgY3g9IjkiIGN5PSI5IiByPSIyIi8+PHBhdGggZD0ibTIxIDE1LTMuMDg2LTMuMDg2YTIgMiAwIDAgMC0yLjgyOCAwTDYgMjEiLz48L3N2Zz4="
    },

    services: SERVICES,
    filteredServices: SERVICES,
    currentRentals: RENTAL_EQUIPMENT,
    rentalType: 'equipment',
    serviceTabs: ['全部', '证件照', '毕业照', '写真', '活动跟拍'],
    activeServiceTab: '全部',

    searchQuery: '',
    searchResults: [],

    // 购物车与订单
    cartItems: [],
    isCartOpen: false,
    totalPrice: 0,
    totalDeposit: 0,
    finalPrice: 0,

    // 用户
    isLogged: false,
    userInfo: {
      avatar: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=400&h=400&fit=crop',
      name: '游客',
      address: '暂未添加地址'
    },

    // 个人资料（必填项）
    profile: { studentId: '', name: '', college: '' },
    isProfileComplete: false,
    showProfileModal: false,
    balance: 0,
    showLogin: false,

    // 数据列表
    userOrders: [{
      id: 'init_1',
      date: '2023-10-24',
      status: '已完成',
      statusColor: 'green',
      total: 69,
      items: [SERVICES[1]]
    }],
    favItems: [],

    // 优惠券
    myCoupons: [], // 用户拥有的
    availableCoupons: [
      { id: 1, val: 10, min: 99, title: '新人立减券', claimed: false },
      { id: 2, val: 50, min: 299, title: '毕业季专享', claimed: false }
    ],
    selectedCoupon: null,

    // 弹窗控制
    showOrderModal: false,
    orderFilterTitle: '全部订单',
    filteredOrders: [],

    showDetailModal: false,
    currentItem: {},
    isCurrentFav: false,

    // === 预约时间相关 ===
    showBookingModal: false,      // 是否显示预约弹窗
    bookingDate: '',              // 选择的日期（YYYY-MM-DD）
    bookingSlot: '',              // 选择的时间段
    bookingRemark: '',            // 备注
    bookingSlots: [               // 可选时间段
      '09:00 - 10:00',
      '10:00 - 11:00',
      '14:00 - 15:00',
      '15:00 - 16:00'
    ],
    bookingTargetItem: null,      // 当前正在预约的套餐（来自 currentItem）
    bookingSlotIndex: -1,         // 当前选中的时间段索引（-1 表示未选择）

    showGallery: false,
    galleryImages: GALLERY_IMAGES,

    showCouponModal: false,   // 领券中心
    showMyCouponsModal: false, // 选券/查看券

    showHelpModal: false,
    faqs: [
      { q: '如何预约摄影师？', a: '选择心仪的套餐，下单后客服会联系您确认时间地点。', open: false },
      { q: '器材租赁需要押金吗？', a: '信用分大于650分免押金，否则需支付相应押金。', open: false },
      { q: '拍完多久能拿到照片？', a: '底片当天发送，精修照片48小时内交付。', open: false }
    ],

    showWalletModal: false,
    showAboutModal: false,
    showSettings: false,
    showAddressModal: false,
    showFavModal: false,
    showCSModal: false,
    tempAddress: '',

    countPending: 0,
    countProcessing: 0,

    toast: { visible: false, message: '' }
  },

  onLoad() {
    const sys = wx.getSystemInfoSync();
    const rect = wx.getMenuButtonBoundingClientRect();
    this.setData({
      statusBarHeight: sys.statusBarHeight,
      navHeight: sys.statusBarHeight + (rect.top - sys.statusBarHeight) * 2 + rect.height,
      navBodyHeight: (rect.top - sys.statusBarHeight) * 2 + rect.height
    });
    this.updateStats();

    // 🗄️ 从本地“数据库”恢复用户信息
    const stored = wx.getStorageSync('ydys_user');
    if (stored && stored.userInfo) {
      const profile = stored.profile || { studentId: '', name: '', college: '' };
      const isProfileComplete = !!(profile.studentId && profile.name && profile.college);
      this.setData({
        isLogged: true,
        userInfo: stored.userInfo,
        profile,
        isProfileComplete
      });
    }
  },

  // --- 导航与搜索 ---
  switchTab(e) {
    this.setData({ activeTab: e.currentTarget.dataset.tab, scrollTop: 0 });
  },
  goHome() {
    this.setData({ activeTab: 'home', scrollTop: 0, searchQuery: '' });
  },
  switchToServices() {
    this.setData({ activeTab: 'services', scrollTop: 0 });
  },
  switchToRentals() {
    this.setData({ activeTab: 'rentals', rentalType: 'equipment', scrollTop: 0 });
  },
  switchToRentalsCostume() {
    this.setData({ activeTab: 'rentals', rentalType: 'costumes', scrollTop: 0 });
  },

  onSearchInput(e) {
    const q = e.detail.value;
    this.setData({ searchQuery: q });
    if (!q) return;
    const all = [...SERVICES, ...RENTAL_EQUIPMENT, ...RENTAL_COSTUMES];
    this.setData({ searchResults: all.filter(i => (i.title || i.name).includes(q)) });
  },
  clearSearch() {
    this.setData({ searchQuery: '' });
  },

  // --- 商品详情 ---
  openDetail(e) {
    const item = e.currentTarget.dataset.item;
    const isFav = this.data.favItems.some(i => i.id === item.id);
    this.setData({ showDetailModal: true, currentItem: item, isCurrentFav: isFav });
  },
  closeDetail() {
    this.setData({ showDetailModal: false });
  },

  toggleFavorite() {
    if (!this.ensureUserReady()) return;
    const item = this.data.currentItem;
    let list = this.data.favItems;
    const isFav = list.some(i => i.id === item.id);
    if (isFav) list = list.filter(i => i.id !== item.id);
    else list.push(item);
    this.setData({ favItems: list, isCurrentFav: !isFav });
    this.showToast(!isFav ? '已收藏' : '已取消收藏');
  },

  addToCartFromDetail() {
    this.addToCart({ currentTarget: { dataset: { item: this.data.currentItem } } });
    this.closeDetail();
  },

    // === 预约时间相关 ===
  // 从详情弹窗 / 卡片「+」 打开预约时间面板
  openBookingFromDetail(e) {
    // 约拍必须先登录 & 完善资料
    if (!this.ensureUserReady()) return;

    // 如果是从卡片「+」过来的，优先用 data-item
    const fromCardItem = e && e.currentTarget && e.currentTarget.dataset
      ? e.currentTarget.dataset.item
      : null;

    const item = fromCardItem || this.data.currentItem;

    if (!item || !item.id) {
      this.showToast('未找到当前套餐');
      return;
    }

    this.setData({
      showBookingModal: true,
      bookingTargetItem: item,
      bookingDate: '',
      bookingSlot: '',
      bookingRemark: ''
    });
  },


  // 关闭预约弹窗
  closeBookingModal() {
    this.setData({
      showBookingModal: false
    });

    // 关闭弹窗时清空选中状态
    this.setData({
      bookingSlotIndex: -1
    });
  },

  // 日期选择（配合 picker mode="date"）
  onBookingDateChange(e) {
    this.setData({
      bookingDate: e.detail.value
    });
  },

  // 选择时间段（配合 data-slot）
  selectBookingSlot(e) {
    const slot = e.currentTarget.dataset.slot;
    this.setData({
      bookingSlot: slot
    });

    // 记录当前选中的时间段索引
    this.setData({
      bookingSlotIndex: e.currentTarget.dataset.index
    });
  },

  // 备注输入（textarea / input）
  onBookingRemarkInput(e) {
    this.setData({
      bookingRemark: e.detail.value
    });
  },

  // 确认预约：带上预约信息，作为一个带 booking 字段的商品加入购物车
  confirmBooking() {
    if (!this.ensureUserReady()) return;

    const date = this.data.bookingDate;
    const slot = this.data.bookingSlot;
    const remark = this.data.bookingRemark || '';

    if (!date || !slot) {
      this.showToast('请选择日期和时间段');
      return;
    }

    const baseItem = this.data.bookingTargetItem || this.data.currentItem;
    if (!baseItem) {
      this.showToast('未找到当前套餐');
      return;
    }

    const booking = { date, slot, remark };

    const cartItem = {
      ...baseItem,
      booking,
      uniqueId: Date.now()
    };

    const newCart = [...this.data.cartItems, cartItem];
    this.updateCart(newCart);

    this.setData({
      showBookingModal: false,
      bookingTargetItem: null,
      bookingDate: '',
      bookingSlot: '',
      bookingRemark: ''
    });

    // 下单后清空选中的时间段
    this.setData({
      bookingSlotIndex: -1
    });

    this.showToast('已添加预约到购物车');
    // 如需自动打开购物车，可在此补充：this.setData({ isCartOpen: true });
  },

  // --- 购物车逻辑 ---
  addToCart(e) {
    const item = e.currentTarget.dataset.item;
    const newCart = [...this.data.cartItems, { ...item, uniqueId: Date.now() }];
    this.updateCart(newCart);
    this.showToast('已加入购物车');
  },
  removeFromCart(e) {
    const idx = e.currentTarget.dataset.index;
    const newCart = [...this.data.cartItems];
    newCart.splice(idx, 1);
    this.updateCart(newCart);
  },
  updateCart(items) {
    const total = items.reduce((s, i) => s + i.price, 0);
    const deposit = items.reduce((s, i) => {
      if (i.deposit && i.deposit.includes('免押')) return s;
      return s + (i.deposit && i.deposit.match(/\d+/) ? parseInt(i.deposit.match(/\d+/)[0]) : 0);
    }, 0);
    this.setData({ cartItems: items, totalPrice: total, totalDeposit: deposit });
    this.calcFinalPrice();
  },
  calcFinalPrice() {
    let final = this.data.totalPrice + this.data.totalDeposit;
    if (this.data.selectedCoupon) final -= this.data.selectedCoupon.val;
    if (final < 0) final = 0;
    this.setData({ finalPrice: final });
  },
  openCart() {
    this.setData({ isCartOpen: true });
  },
  closeCart() {
    this.setData({ isCartOpen: false });
  },

  // --- 优惠券逻辑 ---
  openCouponSelector() {
    if (this.data.myCoupons.length === 0) return this.showToast('暂无可用优惠券');
    this.setData({ showMyCouponsModal: true });
  },
  selectCouponForCart(e) {
    const coupon = e.currentTarget.dataset.coupon;
    if (this.data.totalPrice < coupon.min) return this.showToast('未满足使用条件');
    this.setData({ selectedCoupon: coupon, showMyCouponsModal: false });
    this.calcFinalPrice();
  },

  checkout() {
    if (!this.ensureUserReady()) return;
    wx.showLoading({ title: '支付中' });
    setTimeout(() => {
      wx.hideLoading();
      const newOrder = {
        id: 'ord_' + Date.now(),
        date: new Date().toLocaleDateString(),
        status: '进行中',
        statusColor: 'blue',
        total: this.data.finalPrice,
        items: [...this.data.cartItems]
      };
      // 移除已用优惠券
      let newCoupons = this.data.myCoupons;
      if (this.data.selectedCoupon) {
        newCoupons = newCoupons.filter(c => c.id !== this.data.selectedCoupon.id);
      }
      this.setData({
        userOrders: [newOrder, ...this.data.userOrders],
        cartItems: [],
        isCartOpen: false,
        myCoupons: newCoupons,
        selectedCoupon: null
      });
      this.updateStats();
      this.showToast('支付成功');
      setTimeout(() => {
        this.openOrders({ currentTarget: { dataset: { status: '进行中' } } });
      }, 800);
    }, 1000);
  },

  // --- 领券中心 ---
  openCouponCenter() {
    this.setData({ showCouponModal: true });
  },
  closeCouponCenter() {
    this.setData({ showCouponModal: false });
  },
  claimCoupon(e) {
    if (!this.ensureUserReady()) return;
    const id = e.currentTarget.dataset.id;
    const updated = this.data.availableCoupons.map(c => c.id === id ? { ...c, claimed: true } : c);
    const newCoupon = this.data.availableCoupons.find(c => c.id === id);
    if (!newCoupon.claimed) {
      this.setData({ availableCoupons: updated, myCoupons: [...this.data.myCoupons, newCoupon] });
      this.showToast('领取成功');
    }
  },
  openMyCoupons() {
    if (!this.ensureUserReady()) return;
    this.setData({ showMyCouponsModal: true });
  },
  closeMyCoupons() {
    this.setData({ showMyCouponsModal: false });
  },

  // --- 钱包 ---
  openWallet() {
    if (!this.ensureUserReady()) return;
    this.setData({ showWalletModal: true });
  },
  closeWallet() {
    this.setData({ showWalletModal: false });
  },
  quickRecharge(e) {
    const val = parseInt(e.currentTarget.dataset.val);
    this.setData({ balance: this.data.balance + val });
    this.showToast('充值成功');
  },

  // --- 订单与退款 ---
  updateStats() {
    const os = this.data.userOrders;
    this.setData({
      countPending: os.filter(o => o.status === '待付款').length,
      countProcessing: os.filter(o => o.status === '进行中').length
    });
  },

  openOrderList(e) {
    if (!this.ensureUserReady()) return;
    const st = e.currentTarget.dataset.status;
    const list = this.data.userOrders.filter(o => o.status === st);
    this.setData({ showOrderModal: true, orderFilterTitle: st + '订单', filteredOrders: list });
  },
  // 保留旧名兼容
  openOrders(e) {
    this.openOrderList(e);
  },

  openAllOrders() {
    if (!this.ensureUserReady()) return;
    this.setData({ showOrderModal: true, orderFilterTitle: '全部订单', filteredOrders: this.data.userOrders });
  },
  closeOrderList() {
    this.setData({ showOrderModal: false });
  },
  setOrderFilter(e) {
    const st = e.currentTarget.dataset.filter;
    const list = st === 'all' ? this.data.userOrders : this.data.userOrders.filter(o => o.status === st);
    this.setData({ orderFilter: st, filteredOrders: list });
  },
  requestRefund(e) {
    const id = e.currentTarget.dataset.id;
    wx.showModal({
      title: '申请退款',
      content: '确定要申请退款吗？',
      success: (res) => {
        if (res.confirm) {
          const updated = this.data.userOrders.map(o => o.id === id ? { ...o, status: '已退款', statusColor: 'gray' } : o);
          this.setData({ userOrders: updated, showOrderModal: false });
          this.updateStats();
          this.showToast('退款申请已提交');
        }
      }
    });
  },

  // --- 其他功能 ---
  openFavorites() {
    if (!this.ensureUserReady()) return;
    this.setData({ showFavModal: true });
  },
  closeFavorites() {
    this.setData({ showFavModal: false });
  },
  openGallery() {
    this.setData({ showGallery: true });
  },
  closeGallery() {
    this.setData({ showGallery: false });
  },
  openHelpCenter() {
    this.setData({ showHelpModal: true });
  },
  closeHelpCenter() {
    this.setData({ showHelpModal: false });
  },
  toggleFaq(e) {
    const idx = e.currentTarget.dataset.idx;
    const updated = this.data.faqs.map((f, i) => i === idx ? { ...f, open: !f.open } : f);
    this.setData({ faqs: updated });
  },
  openAbout() {
    this.setData({ showAboutModal: true });
  },
  closeAbout() {
    this.setData({ showAboutModal: false });
  },

  // ✅ 检查：已登录 + 已完善资料，否则弹出对应弹窗
  ensureUserReady() {
    if (!this.data.isLogged) {
      this.showLoginModal();
      return false;
    }
    if (!this.data.isProfileComplete) {
      this.setData({ showProfileModal: true });
      this.showToast('请先完善个人信息');
      return false;
    }
    return true;
  },

  // 个人信息编辑入口
  openProfileEditor() {
    if (!this.data.isLogged) {
      this.showLoginModal();
      return;
    }
    this.setData({ showProfileModal: true });
  },

  // 关闭个人信息弹窗
  closeProfileModal() {
    this.setData({ showProfileModal: false });
  },

  // 个人信息输入（学号 / 姓名 / 学院）
  onProfileInput(e) {
    const field = e.currentTarget.dataset.field;   // studentId / name / college
    const value = e.detail.value;
    if (!field) return;
    this.setData({
      ['profile.' + field]: value
    });
  },

  // ✅ 保存个人资料：必填 + 写入本地“数据库”，并同步到 userInfo.name
  saveProfile() {
    const p = this.data.profile || {};
    if (!p.studentId || !p.name || !p.college) {
      this.showToast('请完整填写学号、姓名、学院');
      return;
    }

    // 在原来的 userInfo 基础上，把展示名改成填写的姓名
    const userInfo = {
      ...this.data.userInfo,
      name: p.name || this.data.userInfo.name
    };

    wx.setStorageSync('ydys_user', {
      userInfo,
      profile: p
    });

    this.setData({
      userInfo,
      profile: p,
      isProfileComplete: true,
      showProfileModal: false
    });
    this.showToast('个人信息已保存');
  },

  showLoginModal() {
    this.setData({ showLogin: true });
  },
  closeLoginModal() {
    this.setData({ showLogin: false });
  },

  handleWechatLogin() {
    wx.showLoading({ title: '登录中' });
    setTimeout(() => {
      wx.hideLoading();
      const userInfo = {
        name: '云大同学',
        avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=400&h=400&fit=crop',
        address: '云南大学呈贡校区'
      };
      const profile = this.data.profile || { studentId: '', name: '', college: '' };
      const isProfileComplete = !!(profile.studentId && profile.name && profile.college);

      wx.setStorageSync('ydys_user', {
        userInfo,
        profile
      });

      this.setData({
        isLogged: true,
        userInfo,
        profile,
        isProfileComplete,
        showLogin: false
      });
      this.showToast('登录成功');
    }, 800);
  },

  // ✅ 配合 index.wxml 里 open-type="chooseAvatar"
  onChooseAvatar(e) {
    const { avatarUrl } = e.detail || {};

    if (!avatarUrl) {
      this.showToast('未获取到头像，请重试');
      return;
    }

    wx.showLoading({ title: '登录中' });
    setTimeout(() => {
      wx.hideLoading();

      const userInfo = {
        name: '云大同学',
        avatar: avatarUrl,              // 用微信返回的真实头像
        address: '云南大学呈贡校区'
      };

      const profile = this.data.profile || { studentId: '', name: '', college: '' };
      const isProfileComplete = !!(profile.studentId && profile.name && profile.college);

      // 写入本地“数据库”
      wx.setStorageSync('ydys_user', {
        userInfo,
        profile
      });

      this.setData({
        isLogged: true,
        userInfo,
        profile,
        isProfileComplete,
        showLogin: false
      });
      this.showToast('登录成功');
    }, 800);
  },

  editAddress() {
    if (!this.ensureUserReady()) return;
    this.setData({ showAddressModal: true, tempAddress: this.data.userInfo.address });
  },
  closeAddressModal() {
    this.setData({ showAddressModal: false });
  },
  onAddressInput(e) {
    this.setData({ tempAddress: e.detail.value });
  },
  saveAddress() {
    this.setData({ 'userInfo.address': this.data.tempAddress, showAddressModal: false });
    this.showToast('保存成功');
  },

  changeAvatar() {
    wx.chooseMedia({
      count: 1,
      mediaType: ['image'],
      sourceType: ['album', 'camera'],
      success: (res) => {
        this.setData({ 'userInfo.avatar': res.tempFiles[0].tempFilePath });
        this.showToast('头像已更新');
      }
    });
  },

  openSettings() {
    this.setData({ showSettings: true });
  },
  closeSettings() {
    this.setData({ showSettings: false });
  },
  logout() {
    this.setData({
      isLogged: false,
      showSettings: false,
      userOrders: [],
      // 恢复默认游客头像和信息
      userInfo: {
        avatar: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=400&h=400&fit=crop',
        name: '游客',
        address: '暂未添加地址'
      }
      // ⚠️ 不再重置 profile / isProfileComplete
      // profile: { studentId: '', name: '', college: '' },
      // isProfileComplete: false
    });

    // ⚠️ 不再把本地“数据库”里的用户记录删掉，
    // 这样下次用同一个微信登录时还能读到之前的资料
    // wx.removeStorageSync('ydys_user');

    this.updateStats();
    this.showToast('已退出');
  },

  contactSupport() {
    this.setData({ showCSModal: true });
  },
  closeCSModal() {
    this.setData({ showCSModal: false });
  },
  makePhoneCall() {
    wx.makePhoneCall({ phoneNumber: '0898-1412' });
  },

  setServiceTab(e) {
    const t = e.currentTarget.dataset.tab;
    this.setData({ activeServiceTab: t, filteredServices: t === '全部' ? SERVICES : SERVICES.filter(s => s.type === t) });
  },
  setRentalType(e) {
    const t = e.currentTarget.dataset.type;
    this.setData({ rentalType: t, currentRentals: t === 'equipment' ? RENTAL_EQUIPMENT : RENTAL_COSTUMES });
  },

  showToast(e) {
    const msg = typeof e === 'string' ? e : e.currentTarget.dataset.msg;
    this.setData({ toast: { visible: true, message: msg } });
    setTimeout(() => {
      this.setData({ toast: { visible: false, message: '' } });
    }, 2000);
  },
  dummy() { }
});
