// section bir
const solanaLogoHeader = document.querySelector(".header_sol")
solanaLogoHeader.innerHTML = `<img src="./assets/images/header-logo-ad.svg" alt="Solana">`
const birinciSectionOrtaYazilar = document.querySelector('.section_birde_orta_yazi')
const hIkiBirinciSection = document.createElement('h2')
hIkiBirinciSection.innerHTML = `Powerful for developers.<br>Fast for everyone.`
const paraqrafBirinciSection = document.createElement('p')
paraqrafBirinciSection.innerHTML = `Bring blockchain to the people. Solana supports experiences <br> for power users, new consumers, and everyone in between.`
const birinciSectionButtonlar = document.createElement('button')
birinciSectionButtonlar.classList = 'section_bir_button'
birinciSectionButtonlar.innerText = 'Start building'
const birinciSectionButtonlarIki = document.createElement('button')
birinciSectionButtonlarIki.classList = 'section_bir_button_iki'
birinciSectionButtonlarIki.innerText = 'Read docs'
birinciSectionOrtaYazilar.appendChild(hIkiBirinciSection)
birinciSectionOrtaYazilar.appendChild(paraqrafBirinciSection)
birinciSectionOrtaYazilar.appendChild(birinciSectionButtonlar)
birinciSectionOrtaYazilar.appendChild(birinciSectionButtonlarIki)


