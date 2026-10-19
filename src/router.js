// Path based routing. Links are plain <a href>: each click loads the page, so the Webflow runtime and its
// interactions start fresh, exactly like on the original site. Vite (dev and preview) serves index.html for every path.
import Home from './pages/Home.jsx'
import AboutUs from './pages/AboutUs.jsx'
import Services from './pages/Services.jsx'
import Projects from './pages/Projects.jsx'
import Blog from './pages/Blog.jsx'
import ContactUs from './pages/ContactUs.jsx'
import NotFound from './pages/NotFound.jsx'
import serviceDetailCaptation360Metiers from './pages/ServiceDetail/captation-360-metiers.jsx'
import serviceDetailAteliersDecouverteMetiers from './pages/ServiceDetail/ateliers-decouverte-metiers.jsx'
import serviceDetailInsertionEtEmploi from './pages/ServiceDetail/insertion-et-emploi.jsx'
import serviceDetailMarqueEmployeurRecrutement from './pages/ServiceDetail/marque-employeur-recrutement.jsx'
import serviceDetailSalonsForumsEvenements from './pages/ServiceDetail/salons-forums-evenements.jsx'
import serviceDetailVisitesVirtuellesPatrimoine from './pages/ServiceDetail/visites-virtuelles-patrimoine.jsx'
import projectDetailTeleassistanceSerenite from './pages/ProjectDetail/teleassistance-serenite.jsx'
import projectDetailLesVesperalesAideADomicile from './pages/ProjectDetail/les-vesperales-aide-a-domicile.jsx'
import projectDetailKinesitherapeuteEn360 from './pages/ProjectDetail/kinesitherapeute-en-360.jsx'
import projectDetailAsSaintEtienneGeoffroyGuichard from './pages/ProjectDetail/as-saint-etienne-geoffroy-guichard.jsx'
import projectDetailCollegeSaintExuperyParcoursAvenir from './pages/ProjectDetail/college-saint-exupery-parcours-avenir.jsx'
import projectDetailMetiersDuSoinSaintSoFormation from './pages/ProjectDetail/metiers-du-soin-saint-so-formation.jsx'
import blogPostPourquoiLaVrChangeLaDecouverteDesMetiers from './pages/BlogPost/pourquoi-la-vr-change-la-decouverte-des-metiers.jsx'
import blogPostPreparerUnAtelierDecouverteMetiersEnVr from './pages/BlogPost/preparer-un-atelier-decouverte-metiers-en-vr.jsx'
import blogPostCommentSeDerouleUnTournage360 from './pages/BlogPost/comment-se-deroule-un-tournage-360.jsx'
import blogPostMetiersEnTensionAttirerDesCandidats from './pages/BlogPost/metiers-en-tension-attirer-des-candidats.jsx'
import blogPostParcoursAvenirLaVrAuCollege from './pages/BlogPost/parcours-avenir-la-vr-au-college.jsx'
import blogPostVideo360OuVideoClassique from './pages/BlogPost/video-360-ou-video-classique.jsx'
import { titles } from './data/titles.js'

const routes = {
  '/': { Page: Home, title: "VR STUDIO", wfPage: '699578abc04bee9d54705e64', chunks: ['webflow.cd9ca78a.5d854ab9dee9c300.js'], schunk3: true },
  '/a-propos': { Page: AboutUs, title: "À propos", wfPage: '6988363595d84fde9ff6fbfa', chunks: ['webflow.cd9ca78a.5d854ab9dee9c300.js'], schunk3: true },
  '/offres': { Page: Services, title: "Nos offres", wfPage: '69883648fff3a610f7a3ff63', chunks: ['webflow.cd9ca78a.5d854ab9dee9c300.js'], schunk3: true },
  '/realisations': { Page: Projects, title: "Réalisations", wfPage: '6988388e1f674b7da91af0e0', chunks: ['webflow.cd9ca78a.5d854ab9dee9c300.js'], schunk3: true },
  '/blog': { Page: Blog, title: "Blog", wfPage: '698836560fa1b4e4573dddfe', chunks: ['webflow.cd9ca78a.5d854ab9dee9c300.js'], schunk3: true },
  '/contact': { Page: ContactUs, title: "Contact", wfPage: '6988389e8a397a610608613f', chunks: ['webflow.d785e3ba.2cbc20a8cf4cb347.js'], schunk3: true },
  '/offres/captation-360-metiers': { Page: serviceDetailCaptation360Metiers, title: titles['captation-360-metiers'], wfPage: '6989c10c81ed13231b204e79', chunks: ['webflow.d785e3ba.2cbc20a8cf4cb347.js'], schunk3: true },
  '/offres/ateliers-decouverte-metiers': { Page: serviceDetailAteliersDecouverteMetiers, title: titles['ateliers-decouverte-metiers'], wfPage: '6989c10c81ed13231b204e79', chunks: ['webflow.d785e3ba.2cbc20a8cf4cb347.js'], schunk3: true },
  '/offres/insertion-et-emploi': { Page: serviceDetailInsertionEtEmploi, title: titles['insertion-et-emploi'], wfPage: '6989c10c81ed13231b204e79', chunks: ['webflow.d785e3ba.2cbc20a8cf4cb347.js'], schunk3: true },
  '/offres/marque-employeur-recrutement': { Page: serviceDetailMarqueEmployeurRecrutement, title: titles['marque-employeur-recrutement'], wfPage: '6989c10c81ed13231b204e79', chunks: ['webflow.d785e3ba.2cbc20a8cf4cb347.js'], schunk3: true },
  '/offres/salons-forums-evenements': { Page: serviceDetailSalonsForumsEvenements, title: titles['salons-forums-evenements'], wfPage: '6989c10c81ed13231b204e79', chunks: ['webflow.d785e3ba.2cbc20a8cf4cb347.js'], schunk3: true },
  '/offres/visites-virtuelles-patrimoine': { Page: serviceDetailVisitesVirtuellesPatrimoine, title: titles['visites-virtuelles-patrimoine'], wfPage: '6989c10c81ed13231b204e79', chunks: ['webflow.d785e3ba.2cbc20a8cf4cb347.js'], schunk3: true },
  '/realisations/teleassistance-serenite': { Page: projectDetailTeleassistanceSerenite, title: titles['teleassistance-serenite'], wfPage: '69942e8d3027d08bea5f2099', chunks: ['webflow.d785e3ba.2cbc20a8cf4cb347.js'], schunk3: true },
  '/realisations/les-vesperales-aide-a-domicile': { Page: projectDetailLesVesperalesAideADomicile, title: titles['les-vesperales-aide-a-domicile'], wfPage: '69942e8d3027d08bea5f2099', chunks: ['webflow.d785e3ba.2cbc20a8cf4cb347.js'], schunk3: true },
  '/realisations/kinesitherapeute-en-360': { Page: projectDetailKinesitherapeuteEn360, title: titles['kinesitherapeute-en-360'], wfPage: '69942e8d3027d08bea5f2099', chunks: ['webflow.d785e3ba.2cbc20a8cf4cb347.js'], schunk3: true },
  '/realisations/as-saint-etienne-geoffroy-guichard': { Page: projectDetailAsSaintEtienneGeoffroyGuichard, title: titles['as-saint-etienne-geoffroy-guichard'], wfPage: '69942e8d3027d08bea5f2099', chunks: ['webflow.d785e3ba.2cbc20a8cf4cb347.js'], schunk3: true },
  '/realisations/college-saint-exupery-parcours-avenir': { Page: projectDetailCollegeSaintExuperyParcoursAvenir, title: titles['college-saint-exupery-parcours-avenir'], wfPage: '69942e8d3027d08bea5f2099', chunks: ['webflow.d785e3ba.2cbc20a8cf4cb347.js'], schunk3: true },
  '/realisations/metiers-du-soin-saint-so-formation': { Page: projectDetailMetiersDuSoinSaintSoFormation, title: titles['metiers-du-soin-saint-so-formation'], wfPage: '69942e8d3027d08bea5f2099', chunks: ['webflow.d785e3ba.2cbc20a8cf4cb347.js'], schunk3: true },
  '/blog/pourquoi-la-vr-change-la-decouverte-des-metiers': { Page: blogPostPourquoiLaVrChangeLaDecouverteDesMetiers, title: titles['pourquoi-la-vr-change-la-decouverte-des-metiers'], wfPage: '6991624ee7fe68129c745067', chunks: ['webflow.cd9ca78a.5d854ab9dee9c300.js'], schunk3: true },
  '/blog/preparer-un-atelier-decouverte-metiers-en-vr': { Page: blogPostPreparerUnAtelierDecouverteMetiersEnVr, title: titles['preparer-un-atelier-decouverte-metiers-en-vr'], wfPage: '6991624ee7fe68129c745067', chunks: ['webflow.cd9ca78a.5d854ab9dee9c300.js'], schunk3: true },
  '/blog/comment-se-deroule-un-tournage-360': { Page: blogPostCommentSeDerouleUnTournage360, title: titles['comment-se-deroule-un-tournage-360'], wfPage: '6991624ee7fe68129c745067', chunks: ['webflow.cd9ca78a.5d854ab9dee9c300.js'], schunk3: true },
  '/blog/metiers-en-tension-attirer-des-candidats': { Page: blogPostMetiersEnTensionAttirerDesCandidats, title: titles['metiers-en-tension-attirer-des-candidats'], wfPage: '6991624ee7fe68129c745067', chunks: ['webflow.cd9ca78a.5d854ab9dee9c300.js'], schunk3: true },
  '/blog/parcours-avenir-la-vr-au-college': { Page: blogPostParcoursAvenirLaVrAuCollege, title: titles['parcours-avenir-la-vr-au-college'], wfPage: '6991624ee7fe68129c745067', chunks: ['webflow.cd9ca78a.5d854ab9dee9c300.js'], schunk3: true },
  '/blog/video-360-ou-video-classique': { Page: blogPostVideo360OuVideoClassique, title: titles['video-360-ou-video-classique'], wfPage: '6991624ee7fe68129c745067', chunks: ['webflow.cd9ca78a.5d854ab9dee9c300.js'], schunk3: true },
}

const notFound = { Page: NotFound, title: 'Page introuvable', wfPage: '69955894b12017bc74cf7c8c', chunks: ['webflow.cd9ca78a.5d854ab9dee9c300.js'], schunk3: true, wrapper: 'page-wrapper ash-color' }

export function resolve(pathname) {
  const path = decodeURI(pathname).replace(/\/+$/, '') || '/'
  return { wrapper: 'page-wrapper', ...(routes[path] || notFound) }
}
