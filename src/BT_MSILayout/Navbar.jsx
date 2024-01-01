import React from 'react'

function Navbar() {
  return (
    <header id="msiHeader" data-v-app><nav className="msiNav"><div className="mainArea msiNav__container"><button className="mainArea__hamburger"><span className="icon-msi-nav" /></button><div className="mainArea__main"><a className="homeLink" href="/index.php"><picture className="homeLink__logo"><source media="(min-width: 992px)" srcSet="https://storage-asset.msi.com/frontend/imgs/logo.png" /><img src="https://storage-asset.msi.com/frontend/imgs/logo.png" alt="MSI  Logo" width={181} height={65} /></picture></a><div className="menuAction"><div className="menuAction__item"><button className="navDrop">Sản phẩm</button></div><div className="menuAction__item"><button className="navDrop">Giải pháp AIoT</button></div><div className="menuAction__item"><button className="navDrop">Có gì mới</button></div><div className="menuAction__item"><a target="_self" href="https://vn.msi.com/support" className="navLink">Hỗ trợ</a></div><div className="menuAction__item"><button className="navDrop">Cộng đồng</button></div></div></div><div className="mainArea__operations"><div className="operationAction"><button className="opDrop"><span className="icon-msi-user" /></button></div><div className="operationAction actionCustom"><a href="https://vn.msi.com/service/wheretobuy#44,3" className="opLink"><span className="icon-msi-wtb" /></a></div><div className="operationAction"><button className="opDrop"><span className="icon-msi-search" /></button></div>{/**/}{/**/}</div></div>{/**/}</nav>{/**/}{/**/}{/**/}</header>



  )
}

export default Navbar