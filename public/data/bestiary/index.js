const b_ai = require("./bestiary-ai.json");
const b_aiFluff = require("./fluff-bestiary-ai.json");
const b_aitfr_dn = require("./bestiary-aitfr-dn.json");
const b_aitfr_dnFluff = require("./fluff-bestiary-aitfr-dn.json");
const b_aitfr_fcd = require("./bestiary-aitfr-fcd.json");
const b_aitfr_fcdFluff = require("./fluff-bestiary-aitfr-fcd.json");
const b_aitfr_isf = require("./bestiary-aitfr-isf.json");
const b_aitfr_isfFluff = require("./fluff-bestiary-aitfr-isf.json");
const b_aitfr_thp = require("./bestiary-aitfr-thp.json");
const b_aitfr_thpFluff = require("./fluff-bestiary-aitfr-thp.json");
const b_bgdia = require("./bestiary-bgdia.json");
const b_bgdiaFluff = require("./fluff-bestiary-bgdia.json");
const b_cm = require("./bestiary-cm.json");
const b_cmFluff = require("./fluff-bestiary-cm.json");
const b_cos = require("./bestiary-cos.json");
const b_cosFluff = require("./fluff-bestiary-cos.json");
const b_crcotn = require("./bestiary-crcotn.json");
const b_crcotnFluff = require("./fluff-bestiary-crcotn.json");
const b_dc = require("./bestiary-dc.json");
const b_dcFluff = require("./fluff-bestiary-dc.json");
const b_dip = require("./bestiary-dip.json");
const b_dipFLuff = require("./fluff-bestiary-dip.json");
const b_dmg = require("./bestiary-dmg.json");
const b_dmgFLuff = require("./fluff-bestiary-dmg.json");
const b_dod = require("./bestiary-dod.json");
const b_dodFLuff = require("./fluff-bestiary-dod.json");
const b_egw = require("./bestiary-egw.json");
const b_egwFLuff = require("./fluff-bestiary-egw.json");
const b_erlw = require("./bestiary-erlw.json");
const b_erlwFluff = require("./fluff-bestiary-erlw.json");
const b_esk = require("./bestiary-esk.json");
const b_ftd = require("./bestiary-ftd.json");
const b_ftdFluff = require("./fluff-bestiary-ftd.json");
const b_ggr = require("./bestiary-ggr.json");
const b_ggrFluff = require("./fluff-bestiary-ggr.json");
const b_gos = require("./bestiary-gos.json");
const b_gosFluff = require("./fluff-bestiary-gos.json");
const b_hftt = require("./bestiary-hftt.json");
const b_hfttFluff = require("./fluff-bestiary-hftt.json");
const b_hol = require("./bestiary-hol.json");
const b_hotdq = require("./bestiary-hotdq.json");
const b_hotdqFluff = require("./fluff-bestiary-hotdq.json");
const b_idrotf = require("./bestiary-idrotf.json");
const b_idrotfFLuff = require("./fluff-bestiary-idrotf.json");
const b_imr = require("./bestiary-imr.json");
const b_imrFluff = require("./fluff-bestiary-imr.json");
const b_jff = require("./bestiary-mff.json");
const b_kkw = require("./bestiary-kkw.json");
const b_llk = require("./bestiary-llk.json");
const b_lmop = require("./bestiary-lmop.json");
const b_lmopFluf = require("./fluff-bestiary-lmop.json");
const b_lr = require("./bestiary-lr.json");
const b_mabjov = require("./bestiary-mabjov.json");
const b_mabjovFluff = require("./fluff-bestiary-mabjov.json");
const b_mffFluff = require("./fluff-bestiary-mff.json");
const b_mm = require("./bestiary-mm.json");
const b_mmFluff = require("./fluff-bestiary-mm.json");
const b_mot = require("./bestiary-mot.json");
const b_motFluff = require("./fluff-bestiary-mot.json");
const b_mpmm = require("./bestiary-mpmm.json");
const b_mpmmFluff = require("./fluff-bestiary-mpmm.json");
const b_mtf = require("./bestiary-mtf.json");
const b_mtfFluff = require("./fluff-bestiary-mtf.json");
const b_nrh_ass = require("./bestiary-nrh-ass.json");
const b_nrh_at = require("./bestiary-nrh-at.json");
const b_nrh_avitw = require("./bestiary-nrh-avitw.json");
const b_nrh_awol = require("./bestiary-nrh-awol.json");
const b_nrh_coi = require("./bestiary-nrh-coi.json");
const b_nrh_tcmc = require("./bestiary-nrh-tcmc.json");
const b_nrh_tlt = require("./bestiary-nrh-tlt.json");
const b_oota = require("./bestiary-oota.json");
const b_ootaFluff = require("./fluff-bestiary-oota.json");
const b_oowFluff = require("./fluff-bestiary-oow.json");
const b_owa = require("./bestiary-oow.json");
const b_phb = require("./bestiary-phb.json");
const b_pota = require("./bestiary-pota.json");
const b_potaFluff = require("./fluff-bestiary-pota.json");
const b_ps_a = require("./bestiary-ps-a.json");
const b_ps_aFLuff = require("./fluff-bestiary-ps-a.json");
const b_ps_d = require("./bestiary-ps-d.json");
const b_ps_i = require("./bestiary-ps-i.json");
const b_ps_k = require("./bestiary-ps-k.json");
const b_ps_x = require("./bestiary-ps-x.json");
const b_ps_z = require("./bestiary-ps-z.json");
const b_rmbre = require("./bestiary-rmbre.json");
const b_rmbreFluff = require("./fluff-bestiary-rmbre.json");
const b_rot = require("./bestiary-rot.json");
const b_rotFluff = require("./fluff-bestiary-rot.json");
const b_rtg = require("./bestiary-rtg.json");
const b_sads = require("./bestiary-sads.json");
const b_sadsFluff = require("./fluff-bestiary-sads.json");
const b_scc = require("./bestiary-scc.json");
const b_sccFluff = require("./fluff-bestiary-scc.json");
const b_sdw = require("./bestiary-sdw.json");
const b_sdwFLuff = require("./fluff-bestiary-sdw.json");
const b_skt = require("./bestiary-skt.json");
const b_sktFluff = require("./fluff-bestiary-skt.json");
const b_slw = require("./bestiary-slw.json");
const b_tce = require("./bestiary-tce.json");
const b_tceFluff = require("./fluff-bestiary-tce.json");
const b_tftyp = require("./bestiary-tftyp.json");
const b_tftypFluff = require("./fluff-bestiary-tftyp.json");
const b_toa = require("./bestiary-toa.json");
const b_toaFluff = require("./fluff-bestiary-toa.json");
const b_ttp = require("./bestiary-ttp.json");
const b_ttpFluff = require("./fluff-bestiary-ttp.json");
const b_ua_ar = require("./bestiary-ua-ar.json");
const b_ua_cdw = require("./bestiary-ua-cdw.json");
const b_ua_cfv = require("./bestiary-ua-cfv.json");
const b_ua2020smt = require("./bestiary-ua-2020smt.json");
const b_ua2021do = require("./bestiary-ua-2021do.json");
const b_ua2021mos = require("./bestiary-ua-2021mos.json");
const b_ua20s5 = require("./bestiary-ua-20s5.json");
const b_ua2s2 = require("./bestiary-ua-20s2.json");
const b_vgm = require("./bestiary-vgm.json");
const b_vgmFluff = require("./fluff-bestiary-vgm.json");
const b_vrgr = require("./bestiary-vrgr.json");
const b_vrgrFluff = require("./fluff-bestiary-vrgr.json");
const b_wbtw = require("./bestiary-wbtw.json");
const b_wbtwFluff = require("./fluff-bestiary-wbtw.json");
const b_wdh = require("./bestiary-wdh.json");
const b_wdhFluff = require("./fluff-bestiary-wdh.json");
const b_wdmm = require("./bestiary-wdmm.json");
const b_wdmmFluff = require("./fluff-bestiary-wdmm.json");
const b_xge = require("./bestiary-xge.json");
const legendarygroups = require("./legendarygroups.json");
const traits = require("./traits.json");

const data = {
  b_ai,
  b_aiFluff,
  b_aitfr_dn,
  b_aitfr_dnFluff,
  b_aitfr_fcd,
  b_aitfr_fcdFluff,
  b_aitfr_isf,
  b_aitfr_isfFluff,
  b_aitfr_thp,
  b_aitfr_thpFluff,
  b_bgdia,
  b_bgdiaFluff,
  b_cm,
  b_cmFluff,
  b_cos,
  b_cosFluff,
  b_crcotn,
  b_crcotnFluff,
  b_dc,
  b_dcFluff,
  b_dip,
  b_dipFLuff,
  b_dmg,
  b_dmgFLuff,
  b_dod,
  b_dodFLuff,
  b_egw,
  b_egwFLuff,
  b_erlw,
  b_erlwFluff,
  b_esk,
  b_ftd,
  b_ftdFluff,
  b_ggr,
  b_ggrFluff,
  b_gos,
  b_gosFluff,
  b_hftt,
  b_hfttFluff,
  b_hol,
  b_hotdq,
  b_hotdqFluff,
  b_idrotf,
  b_idrotfFLuff,
  b_imr,
  b_imrFluff,
  b_jff,
  b_kkw,
  b_llk,
  b_lmop,
  b_lmopFluf,
  b_lr,
  b_mabjov,
  b_mabjovFluff,
  b_mffFluff,
  b_mm,
  b_mmFluff,
  b_mot,
  b_motFluff,
  b_mpmm,
  b_mpmmFluff,
  b_mtf,
  b_mtfFluff,
  b_nrh_ass,
  b_nrh_at,
  b_nrh_avitw,
  b_nrh_awol,
  b_nrh_coi,
  b_nrh_tcmc,
  b_nrh_tlt,
  b_oota,
  b_ootaFluff,
  b_oowFluff,
  b_owa,
  b_phb,
  b_pota,
  b_potaFluff,
  b_ps_a,
  b_ps_aFLuff,
  b_ps_d,
  b_ps_i,
  b_ps_k,
  b_ps_x,
  b_ps_z,
  b_rmbre,
  b_rmbreFluff,
  b_rot,
  b_rotFluff,
  b_rtg,
  b_sads,
  b_sadsFluff,
  b_scc,
  b_sccFluff,
  b_sdw,
  b_sdwFLuff,
  b_skt,
  b_sktFluff,
  b_slw,
  b_tce,
  b_tceFluff,
  b_tftyp,
  b_tftypFluff,
  b_toa,
  b_toaFluff,
  b_ttp,
  b_ttpFluff,
  b_ua_ar,
  b_ua_cdw,
  b_ua_cfv,
  b_ua2020smt,
  b_ua2021do,
  b_ua2021mos,
  b_ua20s5,
  b_ua2s2,
  b_vgm,
  b_vgmFluff,
  b_vrgr,
  b_vrgrFluff,
  b_wbtw,
  b_wbtwFluff,
  b_wdh,
  b_wdhFluff,
  b_wdmm,
  b_wdmmFluff,
  b_xge,
  legendarygroups,
  traits,
};

module.exports = {
  data,
};
