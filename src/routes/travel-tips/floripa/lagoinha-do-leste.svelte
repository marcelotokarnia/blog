<script>
  import Map from '../../../components/map/Map.svelte'
  import Polyline from '../../../components/map/Polyline.svelte'

  const center = { lat: -27.774435, lng: -48.497667 }
  const path =
    'xpphD|~`gH`@gCyA_@Bm@|AyAb@iBG{Bi@cBZoAQk@n@wBNgBt@{@@gDTe@mA]W_@q@}DNuAmAaCg@eBCe@hB}BCyCv@qAnAi@zA_@tCBzDz@bAt@dBAhAXx@Op@p@rAAr@V~CwBtAO^i@]K`@e@Yn@v@Cj@k@_@iAiBs@[iAm@i@DwAgA~@aAI@j@K`@}ALCy@Iz@`BIVWOi@Xa@~@JL_@`@ILRKlA`AtAxA\\h@l@Nx@Ub@wBdAq@?gD~B_DoAeBPkBi@w@NkFiBoDC{Cl@i@pBPxBKd@}@h@g@`As@Dg@_@}@|@eBt@_AGcAb@aAdA{ANyAbAeD[Wh@{A[sDnCGlAXjAY{@CuASA{@uAgBO}@PcDOgCk@m@k@eBGoBm@]jBYH_AHYSCg@sAQuCfAB^_A_@wAuAMRgA{@WFVI?{@_@?VJBx@`An@JrAa@`EmAl@bAaAz@iHQgAKB`@VG|AxAjAlAGtCoAx@XA`@`@h@jBmAJs@d@Gr@`@vCZV^~@XjELRXjEKHnAb@?rAo@|A{AxA^bAc@vAApAJx@o@x@DpBoBfABf@MpBkARV\\}@^XnAQj@Zi@UHc@rAoAQqADiAr@}AbD}@vAHtAW\\]PoA^o@Oy@b@cCf@_ALoATKTe@@_Aj@k@FiCf@[r@d@LhAv@p@Vr@Dt@O?f@FBj@b@ZQRDn@f@@d@t@b@QMEC\\a@QBrAI|@fBMVuAz@ADRp@]Hk@XAPc@PqAZOT}Bl@{AnEeAr@w@OyAd@i@Wc@F{@nA}@Be@|@s@G_As@wAt@aBXYzDS_@g@y@k@YR]]WZcCGiBwAs@mAiD{ADgA`@}@g@w@Xr@j@L_Ar@k@B[s@}@KSm@}CmAn@_BfAs@jAf@CRsBSc@Zs@jCBtA[l@{A[ORd@|@?d@aBAk@nAu@`A[vAkAv@w@tA_Ct@bANx@`AtDtCPb@OhDe@d@c@fBc@h@DtBg@`Aa@LmAjHg@fABt@iAxCcERsCt@}@~AVlCsBlCVpBdB`CYpCp@~CX\\v@@RT]bCD~@}@tA{@xEAdBTNLlA?vC]vAyAvAGp@PXhALUlDWN'
</script>

<Map zoom={14} {center}>
  <Polyline {path} />
</Map>
