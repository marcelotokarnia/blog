const cloudinaryTransformations = `/c_scale,h_400,q_auto:low`

const idsToCloudinary = ids =>
  ids.map(
    id =>
      `https://res.cloudinary.com/marcelotokarnia/image/upload${cloudinaryTransformations}/v1601047079/projects/${id}`
  )

export const djangoNews = idsToCloudinary([
  `djangoNews1_nqmuq7.png`,
  `djangoNews2_bh0ymk.png`,
  `djangoNews3_nkxaf6.png`,
])

export const stravaMaps = idsToCloudinary([
  `strava-maps1_anhmgo.png`,
  `strava-maps2_dgzwos.png`,
  `strava-maps3_wud8hz.png`,
])

export const trekkpedia = idsToCloudinary([
  `trekkpedia1_ufaolq.png`,
  `trekkpedia2_apgu1l.png`,
  `trekkpedia3_meocuw.png`,
])

export const revues = idsToCloudinary([
  `revues1_ogsaal.png`,
  `revues2_o80gsn.png`,
  `revues3_opo6oh.png`,
])

export const playingWithCanvas = idsToCloudinary([
  `playingWithCanvas1_wlj8f8.png`,
  `playingWithCanvas2_kvnq6t.png`,
  `playingWithCanvas3_wwgmhz.png`,
])

export const portfolio = idsToCloudinary([
  `portfolio1_icxq8d.png`,
  `portfolio2_ozrvma.png`,
  `portfolio3_h1o1tr.png`,
])

export const blog = idsToCloudinary([`blog1_bigeht.png`, `blog2_lbstkw.png`, `blog3_lftj00.png`])

export const reactReduxTypescript = idsToCloudinary([`reactreduxtypescript_wnutxw.png`])

export const bubbles = idsToCloudinary([`bubbleGame_u9c9uq.png`])

export const apartments = idsToCloudinary([
  `apartments1_svqxe7.png`,
  `apartments2_rag3h6.png`,
  `apartments3_yvrux4.png`,
])

export const viewport = idsToCloudinary([
  `viewport1_oc8b0n.png`,
  `viewport2_mi7nwk.png`,
  `viewport3_yrurwd.png`,
])

export const slickSlices = idsToCloudinary([
  `slices1_dlzuq4.png`,
  `slices2_roegpo.png`,
  `slices3_b8uvb4.png`,
  `slices4_kxdjgj.png`,
])
