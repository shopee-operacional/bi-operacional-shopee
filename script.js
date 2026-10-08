// ==================== APP NO CELULAR (ícone na tela inicial) ====================
// Estas marcações ficavam no <head> do index.html; agora são criadas aqui,
// pra o index.html poder ser mínimo. Só têm efeito se os arquivos
// manifest.json e a pasta icons existirem no repositório.
(function(){
  const add = (tag, attrs)=>{ const el = document.createElement(tag); Object.keys(attrs).forEach(k=>el.setAttribute(k, attrs[k])); document.head.appendChild(el); };
  add("link", {rel:"manifest", href:"manifest.json"});
  add("link", {rel:"apple-touch-icon", href:"icons/apple-touch-icon.png"});
  add("meta", {name:"apple-mobile-web-app-capable", content:"yes"});
  add("meta", {name:"mobile-web-app-capable", content:"yes"});
  add("meta", {name:"apple-mobile-web-app-title", content:"BI Shopee"});
})();
// ==================== ESTRUTURA DA PÁGINA ====================
// Todo o HTML do painel fica aqui, e não mais no index.html. O index.html
// virou um arquivo mínimo (só carrega o style.css e este script.js), porque
// ele vinha sendo cortado ao ser colado no GitHub e derrubava o painel.
// Para mudar menus, títulos, abas ou o rodapé do menu, edite o texto abaixo.
// (Se o index.html antigo, completo, ainda estiver no ar, este bloco é ignorado.)
if(!document.querySelector(".app")){
  document.body.insertAdjacentHTML("afterbegin", `
<div id="loading-overlay" class="loading-overlay"><div class="loading-box loading-box-anim"><div class="loader-anim"><img class="loader-gif" src="carregando.gif" alt="" width="110" height="142" onerror="this.outerHTML='&lt;span class=&quot;spinner&quot;&gt;&lt;/span&gt;'"><div class="loader-txt">Carregando indicadores…</div></div></div></div>
<div class="app">
  <div class="sidebar-backdrop" id="sidebar-backdrop"></div>
  <div class="sidebar" id="sidebar">
   <div class="sidebar-inner">
    <div class="brand">
      <div class="brand-icon">
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAKMGlDQ1BJQ0MgUHJvZmlsZQAAeJydlndUVNcWh8+9d3qhzTAUKUPvvQ0gvTep0kRhmBlgKAMOMzSxIaICEUVEBBVBgiIGjIYisSKKhYBgwR6QIKDEYBRRUXkzslZ05eW9l5ffH2d9a5+99z1n733WugCQvP25vHRYCoA0noAf4uVKj4yKpmP7AQzwAAPMAGCyMjMCQj3DgEg+Hm70TJET+CIIgDd3xCsAN428g+h08P9JmpXBF4jSBInYgs3JZIm4UMSp2YIMsX1GxNT4FDHDKDHzRQcUsbyYExfZ8LPPIjuLmZ3GY4tYfOYMdhpbzD0i3pol5IgY8RdxURaXky3iWyLWTBWmcUX8VhybxmFmAoAiie0CDitJxKYiJvHDQtxEvBQAHCnxK47/igWcHIH4Um7pGbl8bmKSgK7L0qOb2doy6N6c7FSOQGAUxGSlMPlsult6WgaTlwvA4p0/S0ZcW7qoyNZmttbWRubGZl8V6r9u/k2Je7tIr4I/9wyi9X2x/ZVfej0AjFlRbXZ8scXvBaBjMwDy97/YNA8CICnqW/vAV/ehieclSSDIsDMxyc7ONuZyWMbigv6h/+nwN/TV94zF6f4oD92dk8AUpgro4rqx0lPThXx6ZgaTxaEb/XmI/3HgX5/DMISTwOFzeKKIcNGUcXmJonbz2FwBN51H5/L+UxP/YdiftDjXIlEaPgFqrDGQGqAC5Nc+gKIQARJzQLQD/dE3f3w4EL+8CNWJxbn/LOjfs8Jl4iWTm/g5zi0kjM4S8rMW98TPEqABAUgCKlAAKkAD6AIjYA5sgD1wBh7AFwSCMBAFVgEWSAJpgA+yQT7YCIpACdgBdoNqUAsaQBNoASdABzgNLoDL4Dq4AW6DB2AEjIPnYAa8AfMQBGEhMkSBFCBVSAsygMwhBuQIeUD+UAgUBcVBiRAPEkL50CaoBCqHqqE6qAn6HjoFXYCuQoPQPWgUmoJ+h97DCEyCqbAyrA2bwAzYBfaDw+CVcCK8Gs6DC+HtcBVcDx+D2+EL8HX4NjwCP4dnEYAQERqihhghDMQNCUSikQSEj6xDipFKpB5pQbqQXuQmMoJMI+9QGBQFRUcZoexR3qjlKBZqNWodqhRVjTqCakf1oG6iRlEzqE9oMloJbYC2Q/ugI9GJ6Gx0EboS3YhuQ19C30aPo99gMBgaRgdjg/HGRGGSMWswpZj9mFbMecwgZgwzi8ViFbAGWAdsIJaJFWCLsHuxx7DnsEPYcexbHBGnijPHeeKicTxcAa4SdxR3FjeEm8DN46XwWng7fCCejc/Fl+Eb8F34Afw4fp4gTdAhOBDCCMmEjYQqQgvhEuEh4RWRSFQn2hKDiVziBmIV8TjxCnGU+I4kQ9InuZFiSELSdtJh0nnSPdIrMpmsTXYmR5MF5O3kJvJF8mPyWwmKhLGEjwRbYr1EjUS7xJDEC0m8pJaki+QqyTzJSsmTkgOS01J4KW0pNymm1DqpGqlTUsNSs9IUaTPpQOk06VLpo9JXpSdlsDLaMh4ybJlCmUMyF2XGKAhFg+JGYVE2URoolyjjVAxVh+pDTaaWUL+j9lNnZGVkLWXDZXNka2TPyI7QEJo2zYeWSiujnaDdob2XU5ZzkePIbZNrkRuSm5NfIu8sz5Evlm+Vvy3/XoGu4KGQorBToUPhkSJKUV8xWDFb8YDiJcXpJdQl9ktYS4qXnFhyXwlW0lcKUVqjdEipT2lWWUXZSzlDea/yReVpFZqKs0qySoXKWZUpVYqqoypXtUL1nOozuizdhZ5Kr6L30GfUlNS81YRqdWr9avPqOurL1QvUW9UfaRA0GBoJGhUa3RozmqqaAZr5ms2a97XwWgytJK09Wr1ac9o62hHaW7Q7tCd15HV8dPJ0mnUe6pJ1nXRX69br3tLD6DH0UvT2693Qh/Wt9JP0a/QHDGADawOuwX6DQUO0oa0hz7DecNiIZORilGXUbDRqTDP2Ny4w7jB+YaJpEm2y06TX5JOplWmqaYPpAzMZM1+zArMus9/N9c1Z5jXmtyzIFp4W6y06LV5aGlhyLA9Y3rWiWAVYbbHqtvpobWPNt26xnrLRtImz2WczzKAyghiljCu2aFtX2/W2p23f2VnbCexO2P1mb2SfYn/UfnKpzlLO0oalYw7qDkyHOocRR7pjnONBxxEnNSemU73TE2cNZ7Zzo/OEi55Lsssxlxeupq581zbXOTc7t7Vu590Rdy/3Yvd+DxmP5R7VHo891T0TPZs9Z7ysvNZ4nfdGe/t57/Qe9lH2Yfk0+cz42viu9e3xI/mF+lX7PfHX9+f7dwXAAb4BuwIeLtNaxlvWEQgCfQJ3BT4K0glaHfRjMCY4KLgm+GmIWUh+SG8oJTQ29GjomzDXsLKwB8t1lwuXd4dLhseEN4XPRbhHlEeMRJpEro28HqUYxY3qjMZGh0c3Rs+u8Fixe8V4jFVMUcydlTorc1ZeXaW4KnXVmVjJWGbsyTh0XETc0bgPzEBmPXM23id+X/wMy421h/Wc7cyuYE9xHDjlnIkEh4TyhMlEh8RdiVNJTkmVSdNcN24192Wyd3Jt8lxKYMrhlIXUiNTWNFxaXNopngwvhdeTrpKekz6YYZBRlDGy2m717tUzfD9+YyaUuTKzU0AV/Uz1CXWFm4WjWY5ZNVlvs8OzT+ZI5/By+nL1c7flTuR55n27BrWGtaY7Xy1/Y/7oWpe1deugdfHrutdrrC9cP77Ba8ORjYSNKRt/KjAtKC94vSliU1ehcuGGwrHNXpubiySK+EXDW+y31G5FbeVu7d9msW3vtk/F7OJrJaYllSUfSlml174x+6bqm4XtCdv7y6zLDuzA7ODtuLPTaeeRcunyvPKxXQG72ivoFcUVr3fH7r5aaVlZu4ewR7hnpMq/qnOv5t4dez9UJ1XfrnGtad2ntG/bvrn97P1DB5wPtNQq15bUvj/IPXi3zquuvV67vvIQ5lDWoacN4Q293zK+bWpUbCxp/HiYd3jkSMiRniabpqajSkfLmuFmYfPUsZhjN75z/66zxailrpXWWnIcHBcef/Z93Pd3Tvid6D7JONnyg9YP+9oobcXtUHtu+0xHUsdIZ1Tn4CnfU91d9l1tPxr/ePi02umaM7Jnys4SzhaeXTiXd272fMb56QuJF8a6Y7sfXIy8eKsnuKf/kt+lK5c9L1/sdek9d8XhyumrdldPXWNc67hufb29z6qv7Sern9r6rfvbB2wGOm/Y3ugaXDp4dshp6MJN95uXb/ncun572e3BO8vv3B2OGR65y747eS/13sv7WffnH2x4iH5Y/EjqUeVjpcf1P+v93DpiPXJm1H2070nokwdjrLHnv2T+8mG88Cn5aeWE6kTTpPnk6SnPqRvPVjwbf57xfH666FfpX/e90H3xw2/Ov/XNRM6Mv+S/XPi99JXCq8OvLV93zwbNPn6T9mZ+rvitwtsj7xjvet9HvJ+Yz/6A/VD1Ue9j1ye/Tw8X0hYW/gUDmPP8uaxzGQAAAJBQTFRF9WQT9IFf+8/D8VgsAAAA/vz8+Fgt/1VV8Ewc91os/wAA+Fos+Vos9lks/38A9Vks/z4+9lcq82I483hU+9bL/lUC8mpD/evl96aO+bil8E4g9Ylp9pZ695yB+se4//8A/OLbfwAA/39/1kcnz2Qv+Eol+LKd318ff38Avz8/qlUqqlVV1CoqzDMAzDMz708fgeY02QAAADB0Uk5TCf///gD/UwP/0AGwLo4CcAQW////A////////////wH/AgIIBwv/CAIEBgMGBQUQCsgGeAAAAt1JREFUeNq1l3mboyAMxrMrICCieHfsNefeu9//2y1gd7Ydg2XqM/mrRfMjiW84gATsgRCViyRJRFYYQtrQe4APS01YlrxaboIEHCAlyZNzE4qk7wDIHzqvnF9WMFZMkbAAAfD8/fy5mv4qj1BExgJawqY5iS7bttTE84SRhzjAQZrJ/+k0Zao9IUcLiQDS0+vl68i9fBY+CR0DkMQHYA76nOmSyrAQ5oCSFD6Ai6LrcgrhPgLwQFzRldSXaTlqcZZWEDBlkJHDm1HlR+V1wPQNZ3NJH5eZ5wDzEuSY7gLDCECfpjq8/bYMLwIQ2aZnVrbfbb3FY1qmFwapL0JqLkZbSWCuDeGqNbenBBvXQJ7ZG3O6Z4hh44aAEskKEwpW+dukYJ1/ItYDVqeQfSzgjnO++EIOefghT7pxux3rLglDCijCgG1DJ2uGjr8bcFc7977ZN71jbCr8NQYs4D86r9r/rgfLOuLvqRCgsy41fy3G9rgJARQewJ7253kHq2jAoOMVpQOPEeIT/EEf1JTWUUr+DT/FGkAm4V4EUtjEpJDZNRHVMt9Quo0g5BYQ0HLjxMNXAKrPVofDUht4JVtAsBl2TsP7Xb3EYEsAXg2+m5ptOBUHYEv9XL/4lhqqu4CSlwEnhk2lH3kQoK5V2qZioxjQGEwMwCK6JtAbYAFt1OK5R7UtflnAY9zCfqT7eQjC7s7kaxSAD7THWkGCJFE7g1viOgTQgo4D8B2lFdIK36BEm+HTbB1vaIO1QgklomU7Xb+7aAFbAqy9Q4CktuI77qqEe/VwXtnloUFbIbUATMvOw7biYPe1rh7dnz3eSxpavBl499LT/3bcBVpB26+gQm00bvy21jebMbAmGK8DFd7bbS5d968UQYC5/Xzz6AFfbj7luNM7kEgp4ktq6dr5ypq0YMpHQA635pC7Sxi4A766xb0SRsvpvvBAbjkwZ9OdAqZLxjPL3sUQOSPTBeovutFQVRWEb1oAAAAASUVORK5CYII=" alt="Shopee" width="26" height="26" style="width:76%;height:76%;object-fit:contain;display:block;">
      </div>
      <div class="brand-text">
        <div class="t1">Painel Operacional</div>
        <div class="t2">Shopee</div>
      </div>
    </div>
    <div class="nav-item active" data-section="resumo"><span class="dot"></span>Resumo Geral</div>
    <div class="nav-item" data-section="sameday"><span class="dot"></span>Same Day</div>
    <div class="nav-item" data-section="leadtime"><span class="dot"></span>Lead Time</div>
    <div class="nav-item" data-section="desempenho"><span class="dot"></span>Desempenho por Agência</div>
    <div class="nav-item" data-section="detalhe"><span class="dot"></span>Detalhe da Agência</div>
    <div class="nav-item" data-section="backlog"><span class="dot"></span>Análise de Backlog<span class="nav-badge" id="nav-backlog-badge">0</span></div>
    <div class="nav-item" data-section="notasfiscais"><span class="dot"></span>Pagamentos<span class="nav-badge" id="nav-nf-badge">0</span></div>
    <div class="nav-item" data-section="base"><span class="dot"></span>Base de Dados</div>
    <div class="nav-item" data-section="historico"><span class="dot"></span>Histórico Pós-Fechamento</div>
    <div class="sidebar-foot">
      <div class="sfoot-desc">Acompanhamento operacional<br>SVP &amp; FM</div>
      <div class="sfoot-line">Desenvolvido por <b>Hellen Mirla</b></div>
      <div class="sfoot-line">Dúvidas e sugestões:<br><a href="mailto:hellen.mirla@shopee.com">hellen.mirla@shopee.com</a><br>ou SeaTalk</div>
      <div class="sfoot-copy">© ${new Date().getFullYear()} · Todos os direitos reservados</div>
    </div>
   </div>
  </div>

  <div class="main">
    <!-- Barra do celular: botão de menu + logo + atualizar (só aparece em telas pequenas) -->
    <div class="mobile-bar">
      <button class="mobile-menu-btn" id="mobile-menu-btn" aria-label="Abrir menu">☰</button>
      <div class="mobile-title"><span>Painel Operacional</span><b id="mobile-section-name">Resumo Geral</b></div>
      <button class="mobile-filter-btn" id="mobile-filter-btn" aria-label="Filtros">Filtros<span id="mobile-filter-count"></span></button>
      <button class="mobile-refresh-btn" id="mobile-refresh-btn" aria-label="Atualizar">⟳</button>
    </div>
    <div class="error-banner" id="error-banner"></div>
    <div id="hist-banner" style="display:none; margin:0 0 12px; padding:10px 14px; border-radius:8px; border:1px solid var(--border); border-left:4px solid var(--brand); background:var(--surface-2); color:var(--text-primary); font-size:12.5px; line-height:1.5;"></div>
    <div class="topbar">
      <div class="filter"><label>Responsável</label>
        <select id="f-resp"><option value="">Todos</option></select>
      </div>
      <div class="filter"><label>Sub-Regional</label>
        <select id="f-subreg"><option value="">Todos</option></select>
      </div>
      <div class="filter sd-data"><label>Data</label><input type="date" id="f-data"></div>
      <div class="filter"><label>Estação</label>
        <select id="f-estacao"><option value="">Todas</option></select>
      </div>
      <div class="filter"><label>Status Coleta</label>
        <select id="f-statuscoleta"><option value="">Todos</option></select>
      </div>
      <div class="filter"><label>Risco Operacional</label>
        <select id="f-risco"><option value="">Todos</option></select>
      </div>
      <div class="spacer"></div>
      <div class="update-chip" id="update-chip"><span class="live-dot" id="live-dot"></span> Sincronizando…</div>
      <button class="theme-btn primary" id="refresh-btn">⟳ Atualizar agora</button>
      <button class="theme-btn" id="theme-toggle">◑ Modo escuro</button>
    </div>

    <!-- RESUMO GERAL -->
    <div class="section active" id="sec-resumo">
      <div class="kpi-grid" id="kpi-grid"></div>
      <div class="kpi-grid kpi-grid-secondary" id="kpi-grid-extra"></div>

      <div class="grid2">
        <div class="card">
          <div class="card-head"><div class="card-title">⚠ Alertas — Prioridade</div><div class="card-link" id="alerts-toggle-top">Ver todas</div></div>
          <div class="col-head" style="display:grid;grid-template-columns:3px 1.3fr 0.55fr 0.95fr 0.7fr;gap:10px;">
            <span></span><span>Agência</span><span>DOP</span><span>Indicador</span><span>Valor</span>
          </div>
          <div id="alerts-list"></div>
          <div class="card-expand-btn" id="alerts-toggle-bottom">+ Ver todas as alertas</div>
        </div>
        <div class="card" id="card-poscoleta">
          <div class="card-head"><div class="card-title">📥 Recebidos pós-coleta por DOP</div><div class="losses-total" id="poscoleta-total"></div></div>
          <div id="rank-poscoleta"></div>
          <div class="card-expand-btn" id="poscoleta-toggle-bottom" style="display:none"></div>
        </div>
      </div>

      <div class="grid2">
        <div class="card">
          <div class="card-head"><div class="card-title" id="fifo-rank-titulo">📉 Ranking — Pior % FIFO (semana)</div><div class="card-link" id="fifo-resumo-toggle-top">Ver ranking completo</div></div>
          <div id="rank-fifo-resumo"></div>
          <div class="alert-sub" id="fifo-rank-nota" style="display:none; padding:8px 4px 0;"></div>
          <div class="card-expand-btn" id="fifo-resumo-toggle-bottom">+ Ver ranking completo</div>
        </div>
        <div class="card">
          <div class="card-head"><div class="card-title">📉 Ranking — Pior Same Day (semana)</div><div class="card-link" id="sameday-resumo-toggle-top">Ver ranking completo</div></div>
          <div id="rank-sameday-resumo"></div>
          <div class="card-expand-btn" id="sameday-resumo-toggle-bottom">+ Ver ranking completo</div>
        </div>
      </div>

      <!-- Sem coleta e Losses em linha inteira, um embaixo do outro -->
      <div class="card" style="margin-bottom:14px">
        <div class="card-head"><div class="card-title">🚚 Dops sem coleta há mais tempo</div><div class="losses-total" id="semcoleta-total"></div></div>
        <div class="table-wrap"><table class="data" id="table-sem-coleta"></table></div>
        <div class="card-expand-btn" id="semcoleta-toggle-bottom" style="display:none"></div>
      </div>

      <div class="card" style="margin-bottom:14px">
        <div class="card-head"><div class="card-title">💸 Maiores Ofensores — Losses</div><div class="losses-total" id="losses-total"></div></div>
        <div id="rank-losses"></div>
        <div class="card-expand-btn" id="losses-toggle-bottom" style="display:none"></div>
      </div>
    </div>

    <!-- SAME DAY -->
    <div class="section" id="sec-sameday">
      <div class="section-title">Same Day <span class="sd-sub" id="sd-subtitle">— carregando…</span></div>
      <div class="sd-toolbar">
        <div class="filter sd-data"><label>Data início</label><input type="date" id="sd-f-ini"></div>
        <div class="filter sd-data"><label>Data fim</label><input type="date" id="sd-f-fim"></div>
        <div class="sd-seg" id="sd-periodo">
          <button data-p="dia" class="active">Último dia</button>
          <button data-p="semana">Semana</button>
          <button data-p="7d">7 dias</button>
          <button data-p="mes">Mês</button>
        </div>
        <div class="filter"><label>Sub-regional</label><select id="sd-f-subreg" data-empty="Todas"></select></div>
        <div class="filter"><label>Station</label><select id="sd-f-station" data-empty="Todas"></select></div>
        <div class="filter"><label>Responsável</label><select id="sd-f-resp" data-empty="Todos"></select></div>
        <button class="theme-btn" id="sd-limpar">Limpar filtros</button>
      </div>
      <div class="kpi-grid" id="sd-kpis"></div>
      <div class="grid2">
        <div class="card">
          <div class="card-head"><div class="card-title">Same Day por Sub-regional</div><div class="sd-hint">clique numa barra para filtrar</div></div>
          <div id="sd-chart-subreg" class="sd-bars"></div>
        </div>
        <div class="card">
          <div class="card-head"><div class="card-title" id="sd-station-title">Same Day por Station</div><div class="sd-hint">clique numa barra para filtrar</div></div>
          <div id="sd-chart-station" class="sd-bars"></div>
          <div class="card-expand-btn" id="sd-station-more" style="display:none"></div>
        </div>
      </div>
      <div class="card" style="margin-bottom:14px">
        <div class="card-head"><div class="card-title">Evolução diária do Same Day</div><div class="sd-hint" id="sd-trend-hint"></div></div>
        <div id="sd-chart-trend" class="sd-trend"></div>
      </div>
      <div class="card">
        <div class="card-head">
          <div class="card-title">Ranking por Agência</div>
          <div class="sd-hint">ordenado pelos pacotes que ficaram fora do Same Day · clique no cabeçalho para reordenar</div>
        </div>
        <div class="search-box"><input id="sd-busca" placeholder="Buscar por DOP, agência ou cidade…"></div>
        <div class="table-wrap"><table class="data" id="sd-ranking"></table></div>
        <div class="card-expand-btn" id="sd-ranking-more" style="display:none"></div>
      </div>
    </div>

    <!-- LEAD TIME -->
    <div class="section" id="sec-leadtime">
      <div class="section-title">Lead Time <span class="sd-sub" id="lt-subtitle"></span></div>
      <div class="sd-toolbar">
        <div class="filter sd-data"><label>Data início</label><input type="date" id="lt-f-ini"></div>
        <div class="filter sd-data"><label>Data fim</label><input type="date" id="lt-f-fim"></div>
        <div class="sd-seg" id="lt-periodo">
          <button data-p="dia">Último dia</button>
          <button data-p="7d">7 dias</button>
          <button data-p="15d">15 dias</button>
        </div>
        <div class="filter"><label>Sub-regional</label><select id="lt-f-subreg" data-empty="Todas"></select></div>
        <div class="filter"><label>Station</label><select id="lt-f-station" data-empty="Todas"></select></div>
        <div class="filter"><label>Canal</label><select id="lt-f-canal" data-empty="Todos"></select></div>
        <button class="theme-btn" id="lt-limpar">Limpar filtros</button>
      </div>
      <div id="lt-loading"></div>
      <div id="lt-conteudo" style="display:none">
        <div class="kpi-grid" id="lt-kpis"></div>
        <div class="grid2">
          <div class="card">
            <div class="card-head"><div class="card-title">Lead time por Sub-regional</div><div class="sd-hint">quanto maior, pior · clique para filtrar</div></div>
            <div id="lt-chart-subreg" class="sd-bars"></div>
          </div>
          <div class="card">
            <div class="card-head"><div class="card-title" id="lt-station-title">Lead time por Station</div><div class="sd-hint">clique para filtrar</div></div>
            <div id="lt-chart-station" class="sd-bars"></div>
            <div class="card-expand-btn" id="lt-station-more" style="display:none"></div>
          </div>
        </div>
        <div class="grid2">
          <div class="card">
            <div class="card-head"><div class="card-title">Lead time por dia</div><div class="lt-legenda" id="lt-trend-legenda"></div></div>
            <div id="lt-chart-trend" class="sd-trend"></div>
          </div>
          <div class="card">
            <div class="card-head"><div class="card-title">On hold por dia</div><div class="sd-hint">pacotes</div></div>
            <div id="lt-chart-onhold" class="sd-bars"></div>
          </div>
        </div>
        <div class="card">
          <div class="card-head">
            <div class="card-title">Ranking por Agência</div>
            <div class="sd-hint">ordenado pelo tempo total (o que mais pesa no lead time) · clique no cabeçalho para reordenar</div>
          </div>
          <div class="search-box"><input id="lt-busca" placeholder="Buscar por DOP, agência, station ou justificativa…"></div>
          <div class="table-wrap"><table class="data" id="lt-ranking"></table></div>
          <div class="card-expand-btn" id="lt-ranking-more" style="display:none"></div>
        </div>
      </div>
    </div>

    <!-- DESEMPENHO -->
    <div class="section" id="sec-desempenho">
      <div class="section-title">Desempenho por Agência</div>
      <div class="card">
        <div class="table-wrap"><table class="data" id="table-desempenho"></table></div>
      </div>
    </div>

    <!-- DETALHE -->
    <div class="section" id="sec-detalhe">
      <div class="section-title">Detalhe da Agência</div>
      <div class="search-box"><input id="detail-search" placeholder="Buscar por DOP ou nome da agência…"></div>
      <div class="card" id="detail-card"><div class="empty-state">Busque uma agência pelo DOP ou nome para ver o detalhe completo.</div></div>
    </div>

    <!-- ANALISE DE BACKLOG -->
    <div class="section" id="sec-backlog">
      <div class="section-title">Análise de Backlog — Pacotes Arrastados por Dia</div>
      <div class="card">
        <div class="card-head">
          <div class="card-title">📦 Pacotes parados por frente e analista</div>
          <div class="card-link" id="backlog-refresh">Atualizar</div>
        </div>
        <div style="display:flex; gap:14px; flex-wrap:wrap; margin-bottom:14px;">
          <div class="filter"><label>Frente</label><select id="backlog-f-frente"><option value="">Todas</option></select></div>
          <div class="filter"><label>Regional</label><select id="backlog-f-regional"><option value="">Todas</option></select></div>
          <div class="filter"><label>Sub-Regional</label><select id="backlog-f-subregional"><option value="">Todas</option></select></div>
          <div class="filter"><label>Analista</label><select id="backlog-f-analista"><option value="">Todos</option></select></div>
        </div>
        <div class="search-box"><input id="backlog-search" placeholder="Buscar por analista, DOP ou nome da agência…"></div>
        <div class="col-head">Prioridade para pacotes D3 ou mais (D1-D2 ainda não são críticos) — clique no analista para ver os DOPs</div>
        <div id="backlog-list"><div class="empty-state">Abra esta aba para carregar a análise de backlog.</div></div>
      </div>
    </div>

    <!-- NOTAS FISCAIS PENDENTES -->
    <div class="section" id="sec-notasfiscais">
      <div class="section-title">Pagamentos</div>
      <div class="card">
        <div class="card-head">
          <div class="card-title">📄 Notas fiscais pendentes de validação</div>
          <div class="card-link" id="nf-refresh">Atualizar</div>
        </div>
        <div id="nf-status" style="font-size:12px; color:var(--text-muted); margin:-4px 0 12px; line-height:1.5;"></div>
        <div style="display:flex; gap:14px; flex-wrap:wrap; margin-bottom:14px;">
          <div class="filter"><label>Mês</label><select id="nf-f-mes"><option value="">Todos</option></select></div>
          <div class="filter"><label>Regional</label><select id="nf-f-regional"><option value="">Todas</option></select></div>
          <div class="filter"><label>Sub-Regional</label><select id="nf-f-subregional"><option value="">Todas</option></select></div>
          <div class="filter"><label>Analista</label><select id="nf-f-analista"><option value="">Todos</option></select></div>
        </div>
        <div class="kpi-grid" style="grid-template-columns:repeat(2,1fr);" id="nf-kpi-grid"></div>
      </div>

      <!-- EMISSÕES DE NF (mesma visão do "Emissions Details" do Data Studio) -->
      <div class="card" style="margin-top:14px;">
        <div class="card-head">
          <div class="card-title">💰 Resumo financeiro por Status SVP</div>
        </div>
        <div style="display:flex; gap:14px; flex-wrap:wrap; margin-bottom:14px;">
          <div class="filter"><label>Status SVP</label><select id="nf-f-statussvp"><option value="">Todos</option></select></div>
          <div class="filter"><label>Status Pagamento</label><select id="nf-f-statuspag"><option value="">Todos</option></select></div>
        </div>
        <div class="col-head" style="padding:0 0 8px;">Usa também os filtros Mês, Regional, Sub-Regional e Analista aqui de cima</div>
        <div class="table-wrap" id="nf-em-resumo"><div class="empty-state">Abra esta aba para carregar as emissões.</div></div>
      </div>

      <div class="card" style="margin-top:14px; margin-bottom:14px;">
        <div class="card-head">
          <div class="card-title">📊 Emissões de NF por Sub-Regional</div>
        </div>
        <div id="nf-em-legenda" style="display:flex; flex-wrap:wrap; gap:6px 16px; margin-bottom:10px;"></div>
        <div id="nf-em-chart"></div>
      </div>

      <div class="grid3">
        <div class="card">
          <div class="card-head"><div class="card-title">Notas pendentes por Regional</div></div>
          <div id="nf-rank-regional"></div>
        </div>
        <div class="card">
          <div class="card-head"><div class="card-title">Notas pendentes por Sub-Regional</div></div>
          <div id="nf-rank-subregional"></div>
        </div>
        <div class="card">
          <div class="card-head"><div class="card-title">Notas pendentes por Analista</div></div>
          <div id="nf-rank-analista"></div>
        </div>
      </div>

      <div class="card">
        <div class="card-head"><div class="card-title">DOPs com nota fiscal pendente</div></div>
        <div class="table-wrap"><table class="data" id="nf-table"></table></div>
      </div>
    </div>

    <!-- BASE -->
    <div class="section" id="sec-base">
      <div class="section-title">Base de Dados</div>
      <div class="card">
        <div class="table-wrap"><table class="data" id="table-base"></table></div>
      </div>
    </div>

    <!-- HISTORICO POS-FECHAMENTO -->
        <div class="section" id="sec-historico">
      <div class="section-title">Histórico — Inbound Pós-Fechamento</div>
      <div class="card">
        <div class="card-head">
          <div class="card-title">📦 Ranking — Agências</div>
          <div class="card-link" id="historico-refresh">Atualizar</div>
        </div>
        <div class="pill-row" id="historico-mode-pills">
          <div class="pill active" data-mode="dia">Por dia</div>
          <div class="pill" data-mode="semana">Por semana</div>
        </div>
        <div style="display:flex; gap:14px; flex-wrap:wrap; margin-bottom:14px;">
          <div class="filter" id="historico-period-filter" style="max-width:220px;">
            <label id="historico-period-label">Dia</label>
            <select id="historico-period-select"></select>
          </div>
          <div class="filter" style="max-width:220px; flex:1; min-width:180px;">
            <label>Buscar por DOP</label>
            <input id="historico-dop-input" type="text" inputmode="numeric" placeholder="Ex: 1722" style="width:100%; border:none; background:transparent; color:var(--text-primary); font-size:13px; outline:none; padding:0;">
          </div>
        </div>
        <div class="empty-state" id="historico-dop-search-msg" style="display:none; padding:0 0 12px; text-align:left; font-size:12px;"></div>
        <div class="hist-rank-list" id="table-historico"></div>
      </div>
      <div class="card" id="historico-chart-card" style="margin-top:14px; display:none;">
        <div class="card-head">
          <div class="card-title" id="historico-chart-title">Evolução diária (últimos 3 meses)</div>
        </div>
        <svg id="historico-chart" viewBox="0 0 900 220" preserveAspectRatio="none"></svg>
      </div>
    </div>

  </div>
</div>
`);
}
// Ícone da aba do navegador (favicon): usa o mesmo logo do menu lateral,
// que já vem embutido na página — não precisa de arquivo de imagem separado.
(function(){
  const img = document.querySelector(".brand-icon img");
  if(!img) return;
  let link = document.querySelector('link[rel="icon"]');
  if(!link){ link = document.createElement("link"); link.rel = "icon"; document.head.appendChild(link); }
  link.type = "image/png";
  link.removeAttribute("sizes");
  link.href = img.src;
})();
const CATS = ["#2a78d6","#eb6834","#1baf7a","#eda100","#e87ba4","#008300","#4a3aa7","#e34948"];
function num(v){ return (v===null||v===undefined||isNaN(v)) ? 0 : +v; }
function pct(v){ return (num(v)*100).toFixed(1)+"%"; }
function pct0(v){ return (num(v)*100).toFixed(0)+"%"; }
// % FIFO com "sem dados": null = agência sem pacote elegível no período
function pctFifo(v){ return (v===null || v===undefined || v==="") ? "sem dados" : pct0(v); }
function pct1(v){ return (num(v)*100).toFixed(1).replace(".",",")+"%"; }
function riskClass(r){
  if(!r) return "warning";
  r = r.toUpperCase();
  if(r.includes("BOM")||r.includes("OK")) return "good";
  if(r.includes("CRÍT")||r.includes("CRIT")) return "critical";
  return "warning";
}
function coletaClass(s){
  if(!s) return "warning";
  s = s.toUpperCase();
  if(s.includes("COLETOU")) return "good";
  if(s.includes("3+")) return "critical";
  return "warning";
}
// normalize rows
// ==================== FONTE DE DADOS AO VIVO ====================
// Cole aqui a URL do Web App do Apps Script (Deploy > New deployment > Web app).
// Veja instruções completas no arquivo DEPLOY.md.
const API_URL = "https://script.google.com/a/macros/shopee.com/s/AKfycbyAlO5tzyNj2xxOjZDRkT8GNov5h9HwEjaRHOvPypVwYkymldkqCXbY15lSIduc1UNTNQ/exec";
const REFRESH_INTERVAL_MS = 5 * 60 * 1000; // busca dados novos a cada 5 minutos
let DATA = [];
// Filtros do topo aceitam VÁRIOS valores (lista vazia = Todos)
let filters = { resp:[], subreg:[], cidade:[], estacao:[], statuscoleta:[], risco:[] };
// (o filtro "Cidade" saiu do topo a pedido; filters.cidade continua existindo,
// sempre vazio, só pra não mexer nas funções que ainda consultam esse campo)
const FILTROS_TOPO = ["resp","subreg","estacao","statuscoleta","risco"];
// Estado de expansão dos cards "ver todas / ver ranking completo" do Resumo
// Geral — cada card colapsa para um preview curto por padrão e expande pra
// lista completa quando o link/botão é clicado (some ao clicar de novo).
let CURRENT_ROWS = [];
const expandState = { alerts:false, fifoResumo:false, sdResumo:false, losses:false, semColeta:false, posColeta:false };
function wireExpandToggle(topId, bottomId, stateKey, onToggle){
  const top = document.getElementById(topId), bottom = document.getElementById(bottomId);
  const handler = ()=>{ expandState[stateKey] = !expandState[stateKey]; onToggle(); };
  if(top) top.addEventListener("click", handler);
  if(bottom) bottom.addEventListener("click", handler);
}
function normalizeRows(raw){
  return raw.map(r => ({
    dop: r["DOP"], resp: r["RESPONSÁVEL"]||"Não informado", agencia: r["AGÊNCIA"]||r["NOME FANTASIA"]||"—",
    fantasia: r["NOME FANTASIA"]||r["AGÊNCIA"]||"—",
    cidade: r["CIDADE"]||"Não informado", estado: r["ESTADO"]||"Não informado", subreg: r["SUB-REGIONAL"]||"Não informado",
    estacao: r["CÓDIGO DA ESTAÇÃO"]||"Não informado",
    backlog: num(r["BACKLOG"]), backlogOps: num(r["BACKLOG TOTAL (OPS)"]),
    inbound: num(r["INBOUND"]), outbound: num(r["OUTBOUND"]),
    fifoHojeFlag: num(r["FIFO HOJE"]), sameDayFlag: num(r["SAME DAY"]),
    // FIFO da semana: célula em branco na BASE_TRATADA = agência sem pacote
    // elegível na semana ("sem dados"), que é diferente de 0%. Fica null.
    fifoSemana: (r["FIFO SEMANA"]==="" || r["FIFO SEMANA"]==null || isNaN(r["FIFO SEMANA"])) ? null : +r["FIFO SEMANA"],
    semana: r["SEMANA"],
    sameDaySemana: num(r["SAME DAY SEMANA"]),
    lost: num(r["LOST"]), pctAtrasados: num(r["% ATRASADOS"]),
    perdasQtd: num(r["QTD PACOTES PERDIDOS"]), perdasValor: num(r["VALOR PERDIDO (R$)"]),
    backlogEnvelhecido: num(r["BACKLOG ENVELHECIDO"]), totalAtrasados: num(r["TOTAL ATRASADOS"]),
    statusColeta: r["STATUS COLETA"]||"—", horasSemColeta: num(r["HORAS SEM COLETA"]),
    agingSemColeta: num(r["AGING SEM COLETA"]), ultimaColeta: r["ULTIMA COLETA"],
    risco: r["RISCO OPERACIONAL"]||"—",
    status: r["STATUS"]||"—", maturacao: r["MATURAÇÃO"]||"—", tevecoleta: r["TEVE_COLETA"]||"—",
    data: r["DATA"]
  }));
}
function uniq(field){ return [...new Set(DATA.map(d=>d[field]).filter(v=>v && v!=="—"))].sort(); }
function populateSelect(id, values){
  const sel = document.getElementById(id);
  const current = sel.value;
  const emptyLabel = sel.dataset.empty || "Todos";
  sel.innerHTML = `<option value="">${emptyLabel}</option>`;
  values.forEach(v=>{ const o=document.createElement("option"); o.value=v; o.textContent=v; sel.appendChild(o); });
  if(values.includes(current)) sel.value = current;
}
function populateFilters(){
  populateSelect("f-resp", uniq("resp"));
  populateSelect("f-subreg", uniq("subreg"));
  populateSelect("f-estacao", uniq("estacao"));
  populateSelect("f-statuscoleta", uniq("statusColeta"));
  populateSelect("f-risco", uniq("risco"));
  const campos = { resp:"resp", subreg:"subreg", cidade:"cidade", estacao:"estacao", statuscoleta:"statusColeta", risco:"risco" };
  FILTROS_TOPO.forEach(k=>{
    const valores = uniq(campos[k]);
    filters[k] = filters[k].filter(v=>valores.includes(v)); // tira o que não existe mais
    msRender(k, valores);
  });
}
// ---------- Filtro com seleção múltipla (caixinhas) ----------
// Substitui visualmente cada <select id="f-..."> por um botão que abre uma
// lista com caixinhas. Dá pra marcar 1, vários ou nenhum (= Todos).
function msTexto(k){
  const sel = document.getElementById("f-"+k);
  const vazio = (k==="cidade" || k==="estacao") ? "Todas" : "Todos";
  const v = filters[k];
  if(!v.length) return vazio;
  if(v.length===1) return v[0];
  return v.length + " selecionados";
}
function msRender(k, valores){
  const sel = document.getElementById("f-"+k); if(!sel) return;
  sel.style.display = "none";
  let box = document.getElementById("ms-"+k);
  if(!box){
    box = document.createElement("div");
    box.className = "ms"; box.id = "ms-"+k;
    box.innerHTML = `<button type="button" class="ms-btn"><span class="ms-txt"></span><span class="ms-seta">▾</span></button><div class="ms-painel"></div>`;
    sel.parentNode.insertBefore(box, sel.nextSibling);
    box.querySelector(".ms-btn").addEventListener("click", ev=>{
      ev.stopPropagation();
      const aberto = box.classList.contains("aberto");
      document.querySelectorAll(".ms.aberto").forEach(m=>m.classList.remove("aberto"));
      if(!aberto){ box.classList.add("aberto"); const b = box.querySelector(".ms-busca"); if(b) b.focus(); }
    });
    box.querySelector(".ms-painel").addEventListener("click", ev=> ev.stopPropagation());
  }
  box.dataset.valores = JSON.stringify(valores);
  const painel = box.querySelector(".ms-painel");
  const busca = valores.length > 8 ? `<input class="ms-busca" placeholder="Buscar…">` : "";
  painel.innerHTML = `${busca}
    <div class="ms-acoes"><a data-a="todos">Marcar todos</a><a data-a="limpar">Limpar</a></div>
    <div class="ms-lista">${valores.map(v=>`<label class="ms-op"><input type="checkbox" value="${esc(v)}" ${filters[k].includes(v)?"checked":""}><span>${esc(v)}</span></label>`).join("")}</div>`;
  painel.querySelectorAll(".ms-op input").forEach(cb=> cb.addEventListener("change", ()=>{
    filters[k] = [...painel.querySelectorAll(".ms-op input:checked")].map(c=>c.value);
    msAtualizar(k); renderAll();
  }));
  painel.querySelectorAll(".ms-acoes a").forEach(a=> a.addEventListener("click", ()=>{
    // "Marcar todos" marca só os visíveis (respeita a busca)
    const vis = [...painel.querySelectorAll(".ms-op")].filter(o=>o.style.display!=="none").map(o=>o.querySelector("input"));
    if(a.dataset.a==="todos") vis.forEach(c=>c.checked=true); else painel.querySelectorAll(".ms-op input").forEach(c=>c.checked=false);
    filters[k] = [...painel.querySelectorAll(".ms-op input:checked")].map(c=>c.value);
    msAtualizar(k); renderAll();
  }));
  const b = painel.querySelector(".ms-busca");
  if(b) b.addEventListener("input", ()=>{
    const q = b.value.trim().toLowerCase();
    painel.querySelectorAll(".ms-op").forEach(o=> o.style.display = o.textContent.toLowerCase().includes(q) ? "" : "none");
  });
  msAtualizar(k);
}
function msAtualizar(k){
  const box = document.getElementById("ms-"+k); if(!box) return;
  box.querySelector(".ms-txt").textContent = msTexto(k);
  box.classList.toggle("ativo", filters[k].length>0);
  box.title = filters[k].join(", ");
  document.dispatchEvent(new CustomEvent("filtros-mudaram"));
}
document.addEventListener("click", ()=> document.querySelectorAll(".ms.aberto").forEach(m=>m.classList.remove("aberto")));
function setLiveStatus(ok, message){
  const dot = document.getElementById("live-dot");
  const chip = document.getElementById("update-chip");
  dot.classList.toggle("stale", !ok);
  chip.lastChild.textContent = " " + message;
}
// Busca dados via <iframe> escondido + postMessage, em vez de
// fetch() ou JSONP. O Web App do Apps Script fica restrito a
// "Qualquer pessoa dentro da Shopee Mobile" (o Workspace não libera
// "Anyone" público). Tanto fetch() quanto JSONP (tag <script>)
// cross-origin acabam bloqueados pelo Chrome (proteção "ORB") quando
// a resposta passa pelo redirecionamento interno do Google. Um
// <iframe> é uma navegação de página normal — não sofre esse
// bloqueio — e a própria página carregada dentro dele (ver
// WebApp.gs) manda os dados de volta via postMessage.
function fetchViaIframe(url, timeoutMs){
  return new Promise((resolve, reject) => {
    const iframe = document.createElement("iframe");
    iframe.style.display = "none";
    let settled = false;
    let timer;
    // rid identifica esta chamada específica — evita que duas buscas
    // concorrentes (ex: dados principais + histórico, disparadas quase
    // ao mesmo tempo) acabem resolvendo com a resposta uma da outra.
    const rid = "r" + Date.now() + "_" + Math.random().toString(36).slice(2);
    function onMessage(ev){
      if(!ev.data || ev.data.source !== "bi-operacional-shopee") return;
      if(ev.data.rid !== rid) return;
      if(settled) return;
      settled = true;
      cleanup();
      if(ev.data.ok) resolve(ev.data.payload);
      else reject(new Error(ev.data.error || "Erro desconhecido ao buscar dados"));
    }
    function cleanup(){
      window.removeEventListener("message", onMessage);
      if(iframe.parentNode) iframe.parentNode.removeChild(iframe);
      clearTimeout(timer);
    }
    window.addEventListener("message", onMessage);
    timer = setTimeout(() => {
      if(settled) return;
      settled = true;
      cleanup();
      reject(new Error("Tempo esgotado ao buscar dados. Confira se você está logada com sua conta @shopee.com."));
    }, timeoutMs || 20000);
    iframe.onerror = () => {
      if(settled) return;
      settled = true;
      cleanup();
      reject(new Error("Falha ao carregar o iframe de dados"));
    };
    const sep = url.indexOf("?") >= 0 ? "&" : "?";
    iframe.src = url + sep + "embed=1&rid=" + rid + "&_=" + Date.now();
    document.body.appendChild(iframe);
  });
}
// ==================== ANIMAÇÃO DE CARREGAMENTO ====================
// Mascote animado (icons/carregando.gif). Some sozinho quando os dados
// chegam, porque o conteúdo da área é substituído pelo resultado.
function loaderHtml(texto){
  return `<div class="loader-anim" role="status">
    <img class="loader-gif" src="carregando.gif" alt="" width="110" height="142" onerror="this.outerHTML='&lt;span class=&quot;spinner&quot;&gt;&lt;/span&gt;'">
    <div class="loader-txt">${texto}</div>
  </div>`;
}
async function loadData(showOverlay){
  const overlay = document.getElementById("loading-overlay");
  const banner = document.getElementById("error-banner");
  if(showOverlay) overlay.style.display = "flex";
  try {
    if(API_URL.indexOf("COLOQUE_AQUI") !== -1){
      throw new Error("API_URL ainda não configurada em script.js");
    }
    const json = await fetchViaIframe(API_URL, 20000);
    const rows = Array.isArray(json) ? json : (json.rows || []);
    DATA = normalizeRows(rows);
    applySameDay();
    banner.style.display = "none";
    populateFilters();
    renderAll();
    const stamp = json.updatedAt ? fmtDate(json.updatedAt) : new Date().toLocaleTimeString("pt-BR");
    setLiveStatus(true, "Sincronizado às " + stamp);
    if(!Array.isArray(json)) histPreencherDias(json.diasSalvos);
  } catch(err){
    console.error(err);
    banner.style.display = "block";
    banner.textContent = "⚠ Não foi possível atualizar os dados agora (" + err.message + "). " + (DATA.length ? "Mostrando a última versão carregada." : "Confira a API_URL em script.js.");
    setLiveStatus(false, "Falha na sincronização");
    if(DATA.length){ populateFilters(); renderAll(); }
  } finally {
    overlay.style.display = "none";
  }
}
// ==================== BASE SALVA POR DIA (filtro "Data") ====================
// O Apps Script (HistoricoBase.gs) grava uma cópia da BASE_TRATADA por dia.
// O filtro "Data" do topo troca os dados ao vivo pela cópia do dia escolhido
// (?tipo=basedia&dia=yyyy-MM-dd). Vale para as abas que usam a BASE_TRATADA:
// Resumo Geral, Desempenho por Agência, Detalhe da Agência e Base de Dados.
// Same Day, Lead Time, Análise de Backlog, Pagamentos e Histórico
// Pós-Fechamento têm data/fonte própria e não mudam com esse filtro.
let HIST_DIA = "";        // "" = ao vivo; "yyyy-MM-dd" = vendo a cópia desse dia
let SD_MAP_VIVO = null;   // Same Day ao vivo, guardado enquanto um dia salvo está aberto
let SD_INFO_VIVO = null;
const HIST_DIAS_SEMANA = ["dom","seg","ter","qua","qui","sex","sáb"];
function histRotuloDia(iso){
  const p = String(iso).split("-");
  const d = new Date(Date.UTC(+p[0], +p[1]-1, +p[2]));
  return p[2]+"/"+p[1]+"/"+p[0] + (isNaN(d) ? "" : " (" + HIST_DIAS_SEMANA[d.getUTCDay()] + ")");
}
function histHora(iso){
  const d = new Date(iso);
  return (!iso || isNaN(d)) ? "" : d.toLocaleTimeString("pt-BR",{hour:"2-digit",minute:"2-digit"});
}
let HIST_DIAS = [];       // dias que têm base gravada: ["2026-10-07","2026-10-06",...]
// Data de hoje no relógio de quem está vendo o painel ("yyyy-MM-dd").
function histHoje(){
  const d = new Date();
  return d.getFullYear() + "-" + String(d.getMonth()+1).padStart(2,"0") + "-" + String(d.getDate()).padStart(2,"0");
}
// Campo "Data" (calendário, igual aos de Same Day/Lead Time). Mostra a data
// de hoje enquanto o painel está ao vivo; escolher outro dia abre a base
// gravada daquele dia. O calendário fica limitado do dia mais antigo gravado
// até hoje.
function histPreencherDias(dias){
  HIST_DIAS = (Array.isArray(dias) ? dias : []).map(x=>x && x.dia).filter(Boolean).sort().reverse();
  histAjustarCampo();
}
function histAjustarCampo(){
  const inp = document.getElementById("f-data"); if(!inp) return;
  const hoje = histHoje();
  inp.max = hoje;
  inp.min = HIST_DIAS.length ? HIST_DIAS[HIST_DIAS.length-1] : hoje;
  inp.value = HIST_DIA || hoje;
  inp.title = HIST_DIAS.length
    ? "Dias com base gravada: " + HIST_DIAS.map(fmtDiaBR).join(", ")
    : "Ainda não há dias gravados — o histórico começa quando o HistoricoBase.gs for ativado no Apps Script.";
}
function histFaixa(json){
  const el = document.getElementById("hist-banner"); if(!el) return;
  if(!HIST_DIA){ el.style.display = "none"; el.innerHTML = ""; return; }
  const hora = histHora(json && json.salvoEm);
  el.innerHTML = "📅 Você está vendo a <b>base salva de " + histRotuloDia(HIST_DIA) + "</b>"
    + (hora ? " (gravada às " + hora + ")" : "")
    + ". Vale para Resumo Geral, Desempenho por Agência, Detalhe da Agência e Base de Dados — as outras abas têm data própria. "
    + '<span id="hist-voltar" style="color:var(--brand);font-weight:700;cursor:pointer;white-space:nowrap;">Voltar para hoje</span>';
  el.style.display = "block";
  const v = document.getElementById("hist-voltar");
  if(v) v.addEventListener("click", histVoltarAoVivo);
}
async function loadBaseDia(dia){
  const overlay = document.getElementById("loading-overlay");
  const banner = document.getElementById("error-banner");
  // Sem base gravada para esse dia: avisa na hora, sem ir ao Apps Script.
  if(HIST_DIAS.indexOf(dia) === -1){
    banner.style.display = "block";
    banner.textContent = HIST_DIAS.length
      ? "⚠ Não há base gravada para " + histRotuloDia(dia) + ". Dias disponíveis: " + HIST_DIAS.map(fmtDiaBR).join(", ") + "."
      : "⚠ Ainda não há nenhum dia gravado. O histórico começa quando o hbSalvarBaseDoDia rodar no Apps Script (e a nova versão do Web App for publicada).";
    histAjustarCampo();
    return;
  }
  if(overlay) overlay.style.display = "flex";
  try{
    const sep = API_URL.indexOf("?") >= 0 ? "&" : "?";
    const json = await fetchViaIframe(API_URL + sep + "tipo=basedia&dia=" + encodeURIComponent(dia), 60000);
    if(json && json.erro) throw new Error(json.erro);
    if(!json || !json.cols || !Array.isArray(json.rows) || Array.isArray(json)) throw new Error("resposta sem dados — confira se o HistoricoBase.gs e o webapp.gs novos foram publicados");
    const rows = json.rows.map(r=>{ const o={}; json.cols.forEach((c,i)=>o[c]=r[i]); return o; });
    // guarda o Same Day ao vivo só na 1ª vez que sai do "ao vivo"
    if(!HIST_DIA){ SD_MAP_VIVO = SD_MAP; SD_INFO_VIVO = SD_INFO; }
    HIST_DIA = dia;
    DATA = normalizeRows(rows);
    // Same Day que o painel mostrava naquele dia (gravado junto com a base)
    const sd = json.sd;
    if(sd && sd.cols && sd.rows){
      const map = {};
      sd.rows.forEach(r=>{ const o={}; sd.cols.forEach((c,i)=>o[c]=r[i]); map[dopKey(o.id)] = {outDia:o.outD, sdDia:o.sdD, outSem:o.outS, sdSem:o.sdS, inbDia:o.inbD, posColDia:o.posColD}; });
      SD_MAP = map;
      SD_INFO = { refDia: sd.refDia, semana: sd.semana, dias: sd.dias || [] };
      applySameDay();
    } else {
      SD_MAP = null; SD_INFO = null; // sem Same Day gravado: usa as colunas da própria base
    }
    banner.style.display = "none";
    populateFilters();
    renderAll();
    const hora = histHora(json.salvoEm);
    setLiveStatus(true, "Base salva de " + fmtDiaBR(dia) + (hora ? " · " + hora : ""));
    histFaixa(json);
    histAjustarCampo();
  } catch(err){
    console.error(err);
    banner.style.display = "block";
    banner.textContent = "⚠ Não foi possível abrir a base de " + histRotuloDia(dia) + " (" + err.message + ").";
    histAjustarCampo(); // volta o campo para o que está de fato na tela
  } finally {
    if(overlay) overlay.style.display = "none";
  }
}
function histVoltarAoVivo(){
  if(HIST_DIA){ SD_MAP = SD_MAP_VIVO; SD_INFO = SD_INFO_VIVO; }
  HIST_DIA = "";
  histAjustarCampo();
  histFaixa(null);
  loadData(true);
}
(function(){
  const inp = document.getElementById("f-data"); if(!inp) return;
  inp.value = histHoje(); inp.max = histHoje();
  inp.addEventListener("change", e=>{
    const dia = e.target.value;
    // campo limpo ou a data de hoje = painel ao vivo
    if(!dia || dia === histHoje()){ if(HIST_DIA) histVoltarAoVivo(); else histAjustarCampo(); return; }
    if(dia === HIST_DIA) return;
    loadBaseDia(dia);
  });
})();
// "Atualizar agora" = recarregar o painel inteiro, como o Ctrl+Shift+R:
// baixa de novo os arquivos do site (ignorando o cache do navegador) e
// recarrega a página, que então busca todos os dados outra vez.
async function atualizarTudo(){
  const overlay = document.getElementById("loading-overlay");
  if(overlay) overlay.style.display = "flex";
  const arquivos = [location.href.split("#")[0], "script.js", "style.css", "carregando.gif"];
  try{
    // cache:"reload" força buscar na rede e já atualiza a cópia guardada pelo navegador
    await Promise.all(arquivos.map(u => fetch(u, { cache: "reload" }).catch(()=>null)));
  } catch(e){ /* sem internet etc.: recarrega mesmo assim */ }
  location.reload();
}
document.getElementById("refresh-btn").addEventListener("click", atualizarTudo);
// ==================== SAME DAY (base "Backup:PUDO | Relatórios OPS") ====================
// O % Same Day da BASE_TRATADA não batia com o Data Studio "Daily OPS".
// Agora vem da mesma base do Data Studio (aba "PUDO | OPS Reg4"), via
// ?tipo=sameday no Apps Script (SameDay.gs). Regra igual ao Data Studio:
// SOMA(Outbound Same Day) / SOMA(Outbound) — ponderado por volume.
let SD_MAP = null;      // { "1722": {outDia, sdDia, outSem, sdSem}, ... }
let SD_INFO = null;     // { refDia, semana, dias }
let SD_ROWS = [];       // uma linha por DOP (aba Same Day — data escolhida no calendário)
let SD_SEC_INFO = null; // { refDia, semana, dias, diasDisponiveis... } da aba Same Day
let SD_TREND = [];      // dia × station × responsável (gráfico de evolução)
function dopKey(v){ return String(v==null?"":v).replace(/\D/g,""); }
function applySameDay(){
  if(!SD_MAP) return;
  DATA.forEach(d=>{
    const m = SD_MAP[dopKey(d.dop)];
    d.sdOutDia = m ? m.outDia : 0; d.sdSdDia = m ? m.sdDia : 0;
    d.sdOutSem = m ? m.outSem : 0; d.sdSdSem = m ? m.sdSem : 0;
    d.sdInbDia = m ? (m.inbDia||0) : 0; d.sdPosColDia = m ? (m.posColDia||0) : 0;
    d.sameDayFlag = d.sdOutDia ? d.sdSdDia / d.sdOutDia : 0;
    d.sameDaySemana = d.sdOutSem ? d.sdSdSem / d.sdOutSem : 0;
    d.temSameDay = d.sdOutSem > 0;
  });
}
async function loadSameDay(){
  try{
    const sep = API_URL.indexOf("?") >= 0 ? "&" : "?";
    const json = await fetchViaIframe(API_URL + sep + "tipo=sameday", 90000);
    const map = {};
    if(json.cols && json.rows){
      // formato novo (v3): linhas compactas + colunas
      json.rows.forEach(r=>{ const o={}; json.cols.forEach((c,i)=>o[c]=r[i]); map[dopKey(o.id)] = {outDia:o.outD, sdDia:o.sdD, outSem:o.outS, sdSem:o.sdS, inbDia:o.inbD, posColDia:o.posColD}; });
    } else {
      (json.dops || []).forEach(r=>{ map[dopKey(r.id)] = r; });
    }
    const infoVivo = { refDia: json.refDia, semana: json.semana, dias: json.dias || [] };
    if(HIST_DIA){
      // um dia salvo está aberto: só guarda o ao vivo pra quando voltar
      SD_MAP_VIVO = map; SD_INFO_VIVO = infoVivo;
    } else {
      SD_MAP = map;
      SD_INFO = infoVivo;
      applySameDay();
      if(DATA.length) renderAll();
    }
    // a aba Same Day abre no último dia; se a pessoa já escolheu outra data
    // no calendário, mantém a escolha dela
    if(!sdView.ini){ sdAplicarDadosSecao(json); }
    sdInitFiltros();
    renderSameDaySection();
  } catch(err){
    console.error("Same Day:", err);
    const sub = document.getElementById("sd-subtitle");
    if(sub) sub.textContent = "— não foi possível carregar agora (" + err.message + ")";
  }
}
// Soma ponderada (igual Data Studio) para um conjunto de DOPs
function sameDayPonderado(rows, tipo){
  let o=0, s=0;
  rows.forEach(d=>{
    if(tipo==="dia"){ o+=d.sdOutDia||0; s+=d.sdSdDia||0; }
    else { o+=d.sdOutSem||0; s+=d.sdSdSem||0; }
  });
  return o ? s/o : 0;
}
function fmtDiaBR(iso){ if(!iso) return ""; const p=String(iso).split("-"); return p[2]+"/"+p[1]; }
// ==================== HISTÓRICO — INBOUND PÓS-FECHAMENTO ====================
// Carregado sob demanda (só quando a aba "Histórico Pós-Fechamento" é aberta
// pela primeira vez), pra não pesar a busca automática de 5 em 5 minutos.
let HIST_DATA = [];
let HIST_LOADED = false;
let HIST_SELECTED_DOP = null;
let HIST_MODE = "dia"; // "dia" | "semana"
let HIST_SELECTED_PERIOD = null; // chave do dia (YYYY-MM-DD) ou da semana, conforme HIST_MODE
let HIST_SHOW_ALL = false; // false = só Top 10, true = lista completa (toggle "Ver todas")
let HIST_RANKING_COMPLETO = []; // último ranking calculado (sem corte de Top 10) — usado pela busca por DOP
let HIST_DOP_FILTRO = null; // quando setado (busca por DOP confirmada), a lista mostra só esse DOP
async function loadHistorico(){
  const tableEl = document.getElementById("table-historico");
  if(tableEl) tableEl.innerHTML = loaderHtml('Carregando histórico… (pode levar até um minuto, a base é grande)');
  try{
    const sep = API_URL.indexOf("?") >= 0 ? "&" : "?";
    // Timeout bem maior que o dos dados principais: a aba "Dados por Dia" tem
    // quase 100 mil linhas — confirmado no log do Apps Script que a busca
    // pode levar uns 56s. Damos bastante folga acima disso.
    const json = await fetchViaIframe(API_URL + sep + "tipo=historico", 90000);
    HIST_DATA = Array.isArray(json) ? json : (json.historico || []);
    HIST_LOADED = true;
    HIST_SELECTED_PERIOD = null;
    populateHistoricoPeriodos();
    renderHistoricoRanking();
  } catch(err){
    console.error(err);
    if(tableEl) tableEl.innerHTML = '<div class="empty-state">Não foi possível carregar o histórico agora (' + err.message + ').</div>';
  }
}
// Só considera, no histórico, os DOPs que estão dentro do escopo ATUAL —
// ou seja, já passando pelos filtros do topo (Responsável, Estação,
// Sub-Regional...). Antes usava DATA (a base inteira, sem filtro nenhum),
// por isso escolher uma Estação lá em cima não mudava nada aqui. A aba
// "Dados por Dia" também tem registros de fora da sua carteira, que esse
// mesmo filtro já deixa de fora.
function historicoFiltradoPorEscopo(){
  const escopoAtual = filtered();
  return HIST_DATA.filter(h => escopoAtual.some(d=>String(d.dop)===String(h.dop)));
}
// Agrupa o histórico (já filtrado pro escopo) por DOP, cada série
// ordenada por data crescente — pronta pra virar linha do gráfico.
function historicoPorDop(){
  const porDop = {};
  historicoFiltradoPorEscopo().forEach(h=>{
    if(!porDop[h.dop]) porDop[h.dop] = [];
    porDop[h.dop].push(h);
  });
  Object.values(porDop).forEach(arr=> arr.sort((a,b)=> new Date(a.data)-new Date(b.data)));
  return porDop;
}
// FIX (01/09/2026): esta função é usada tanto para rotular DIAS
// (recebe uma string "YYYY-MM-DD", sem horário) quanto para rotular
// pontos do gráfico de evolução (recebe um ISO completo, com horário).
// Sem "timeZone: 'UTC'", o toLocaleDateString exibia a data no fuso
// do NAVEGADOR de quem está vendo o painel. Para uma string
// "YYYY-MM-DD" (interpretada pelo JS como meia-noite UTC), isso fazia
// o rótulo "voltar" um dia inteiro em qualquer fuso negativo — como o
// horário de Brasília (UTC-3) — porque meia-noite UTC já é a noite
// anterior aqui. Resultado: o seletor "DIA" mostrava, por exemplo,
// "30/08" no texto para uma opção cujo valor real era "2026-08-31",
// fazendo o painel exibir os números de segunda-feira como se fossem
// de domingo. Forçar timeZone: "UTC" faz o rótulo sempre bater com a
// mesma data (UTC) usada para montar a chave em dateKey(), então o
// texto exibido nunca mais desalinha do valor selecionado — e não
// muda em nada os rótulos que já vinham de um ISO com horário (como
// os do gráfico de evolução), que já caíam no dia certo.
function fmtDateShort(iso){
  const d = new Date(iso);
  if(isNaN(d)) return iso;
  return d.toLocaleDateString("pt-BR", {day:"2-digit", month:"2-digit", timeZone:"UTC"});
}
function dateKey(iso){
  const d = new Date(iso);
  if(isNaN(d)) return iso;
  return d.toISOString().slice(0,10);
}
// Preenche o seletor de período (dias ou semanas disponíveis no histórico
// carregado), mantendo a seleção atual se ela ainda existir na lista.
function populateHistoricoPeriodos(){
  const escopo = historicoFiltradoPorEscopo();
  const sel = document.getElementById("historico-period-select");
  const label = document.getElementById("historico-period-label");
  if(!sel) return;
  if(HIST_MODE === "dia"){
    if(label) label.textContent = "Dia";
    const dias = [...new Set(escopo.map(h=>dateKey(h.data)))].sort().reverse();
    sel.innerHTML = dias.map(k=>`<option value="${k}">${fmtDateShort(k)}</option>`).join("");
    if(!dias.includes(HIST_SELECTED_PERIOD)) HIST_SELECTED_PERIOD = dias[0] || null;
  } else {
    if(label) label.textContent = "Semana";
    const semanas = [...new Set(escopo.map(h=>h.semana).filter(Boolean))].sort().reverse();
    sel.innerHTML = semanas.map(s=>`<option value="${s}">Semana ${s}</option>`).join("");
    if(!semanas.includes(HIST_SELECTED_PERIOD)) HIST_SELECTED_PERIOD = semanas[0] || null;
  }
  sel.value = HIST_SELECTED_PERIOD || "";
}
document.querySelectorAll("#historico-mode-pills .pill").forEach(p=>{
  p.addEventListener("click", ()=>{
    if(p.dataset.mode === HIST_MODE) return;
    document.querySelectorAll("#historico-mode-pills .pill").forEach(x=>x.classList.remove("active"));
    p.classList.add("active");
    HIST_MODE = p.dataset.mode;
    HIST_SELECTED_PERIOD = null;
    if(HIST_LOADED){ populateHistoricoPeriodos(); renderHistoricoRanking(); }
  });
});
const histPeriodSelect = document.getElementById("historico-period-select");
if(histPeriodSelect) histPeriodSelect.addEventListener("change", e=>{
  HIST_SELECTED_PERIOD = e.target.value;
  renderHistoricoRanking();
});
// Ranking Top 10 do período selecionado (um dia específico, ou a soma da
// semana selecionada). "% Impacto" = fatia dessa agência dentro do total
// de pós-fechamento de TODAS as agências no período (não o total da
// própria agência) — mesma lógica da planilha "INBOUND APOS FECHAMENTO"
// que serviu de referência pro visual deste ranking.
function renderHistoricoRanking(){
  const escopo = historicoFiltradoPorEscopo();
  const linhasPeriodo = HIST_MODE === "dia"
    ? escopo.filter(h => dateKey(h.data) === HIST_SELECTED_PERIOD)
    : escopo.filter(h => h.semana === HIST_SELECTED_PERIOD);
  const porDopPeriodo = {};
  linhasPeriodo.forEach(h=>{
    if(!porDopPeriodo[h.dop]) porDopPeriodo[h.dop] = 0;
    porDopPeriodo[h.dop] += num(h.valor);
  });
  // Total do período = soma de TODAS as agências (não só o Top 10), pra
  // o % de cada agência refletir o peso real dela no total do período.
  const totalPeriodo = Object.values(porDopPeriodo).reduce((a,b)=>a+b, 0);
  // Só entra no ranking quem realmente recebeu pacote depois do fechamento
  // nesse período (valor > 0) — agência zerada não é "ranking", é ruído
  // (e inflava a lista "Ver todas" com dezenas de linhas sem barra nenhuma).
  const rankingCompleto = Object.keys(porDopPeriodo).map(dop=>{
    const info = DATA.find(d=>String(d.dop)===String(dop));
    const valor = porDopPeriodo[dop];
    return {
      dop,
      agencia: info ? info.agencia : "—",
      resp: info ? info.resp : "—",
      valor,
      pct: totalPeriodo > 0 ? (valor/totalPeriodo) : 0
    };
  }).filter(l=>l.valor > 0).sort((a,b)=>b.valor-a.valor);
  HIST_RANKING_COMPLETO = rankingCompleto;
  const el = document.getElementById("table-historico");
  if(!el) return;
  // Busca por DOP confirmada (HIST_DOP_FILTRO setado em buscarHistoricoDop):
  // mostra SÓ essa agência, em vez da lista inteira — com um link pra
  // voltar ao ranking completo.
  if(HIST_DOP_FILTRO){
    const posicao = rankingCompleto.findIndex(l=>String(l.dop)===String(HIST_DOP_FILTRO));
    const voltar = '<div class="hist-rank-toggle" data-action="clear-dop-filter">← Ver ranking completo</div>';
    if(posicao < 0){
      el.innerHTML = '<div class="empty-state">DOP ' + HIST_DOP_FILTRO + ' não recebeu pacotes pós-fechamento nesse período/filtro.</div>' + voltar;
      const clearEl1 = el.querySelector('[data-action="clear-dop-filter"]');
      if(clearEl1) clearEl1.addEventListener("click", limparBuscaHistoricoDop);
      return;
    }
    const l = rankingCompleto[posicao];
    const maxValorFiltro = Math.max(...rankingCompleto.map(x=>x.valor), 1);
    const linha = `
      <div class="hist-rank-row row-selected" data-dop="${l.dop}">
        <div class="rank-num">${posicao+1}</div>
        <div class="hist-rank-label">${l.agencia}<span class="hist-rank-sub">DOP ${l.dop} · ${l.resp}</span></div>
        <div class="hbar-track"><div class="hbar-fill" style="width:${(l.valor/maxValorFiltro*100).toFixed(1)}%;background:var(--brand)"></div></div>
        <div class="hist-rank-val">${l.valor.toLocaleString("pt-BR")}</div>
        <div class="hist-rank-pct">${pct0(l.pct)}</div>
      </div>`;
    el.innerHTML = '<div class="hist-rank-rows">' + linha + '</div>' + voltar;
    const clearEl = el.querySelector('[data-action="clear-dop-filter"]');
    if(clearEl) clearEl.addEventListener("click", limparBuscaHistoricoDop);
    selecionarHistoricoDop(l.dop);
    return;
  }
  // Por padrão só o Top 10 (pra não repetir aquele scroll gigante da
  // página inteira); "Ver todas" alterna pra lista completa, com um
  // scroll PRÓPRIO e limitado, só dentro do card — não força a página
  // toda a rolar de novo.
  const ranking = HIST_SHOW_ALL ? rankingCompleto : rankingCompleto.slice(0,10);
  if(!rankingCompleto.length){
    el.innerHTML = '<div class="empty-state">Sem dados de histórico para o período selecionado.</div>';
    return;
  }
  // Escala das barras sempre pelo maior valor do período inteiro (não só
  // do que está visível), pra não "pular" de tamanho ao expandir/recolher.
  const maxValor = Math.max(...rankingCompleto.map(l=>l.valor), 1);
  // IMPORTANTE: nada de onclick="...(${JSON.stringify(l.dop)})" aqui — como
  // o DOP vem como string, JSON.stringify devolve algo como "7990" (com
  // aspas duplas dentro), e isso quebra o atributo onclick="..." que já usa
  // aspas duplas por fora (o HTML fecha o atributo na primeira aspas que
  // encontra). O clique funcionava só na 1ª linha (chamada direto via JS,
  // não pelo onclick) e falhava silenciosamente em todas as outras. Por
  // isso agora usamos só data-dop + addEventListener, sem montar JS dentro
  // do HTML.
  const linhas = ranking.map((l,i)=>`
    <div class="hist-rank-row${String(l.dop)===String(HIST_SELECTED_DOP)?' row-selected':''}" data-dop="${l.dop}" title="Clique para ver a evolução de ${l.agencia}">
      <div class="rank-num">${i+1}</div>
      <div class="hist-rank-label">${l.agencia}<span class="hist-rank-sub">DOP ${l.dop} · ${l.resp}</span></div>
      <div class="hbar-track"><div class="hbar-fill" style="width:${(l.valor/maxValor*100).toFixed(1)}%;background:var(--brand)"></div></div>
      <div class="hist-rank-val">${l.valor.toLocaleString("pt-BR")}</div>
      <div class="hist-rank-pct">${pct0(l.pct)}</div>
    </div>`).join("");
  const toggle = rankingCompleto.length > 10
    ? `<div class="hist-rank-toggle" data-action="toggle-show-all">${HIST_SHOW_ALL ? "Ver só Top 10" : `Ver todas as ${rankingCompleto.length} agências`}</div>`
    : "";
  el.innerHTML = `<div class="hist-rank-rows${HIST_SHOW_ALL ? " hist-rank-rows-scroll" : ""}">${linhas}</div>${toggle}`;
  el.querySelectorAll(".hist-rank-row").forEach(row=>{
    row.addEventListener("click", ()=> selecionarHistoricoDop(row.dataset.dop));
  });
  const toggleEl = el.querySelector('[data-action="toggle-show-all"]');
  if(toggleEl) toggleEl.addEventListener("click", toggleHistoricoShowAll);
  const aindaExiste = ranking.some(l=>String(l.dop)===String(HIST_SELECTED_DOP));
  selecionarHistoricoDop(aindaExiste ? HIST_SELECTED_DOP : ranking[0].dop);
}
function toggleHistoricoShowAll(){
  HIST_SHOW_ALL = !HIST_SHOW_ALL;
  renderHistoricoRanking();
}
// Busca rápida por número de DOP no ranking (útil com centenas de
// agências, sem precisar clicar em "Ver todas" e catar na mão). Aceita o
// número exato ou o começo dele; se achar, a lista passa a mostrar SÓ essa
// agência (HIST_DOP_FILTRO), com um link "Ver ranking completo" pra voltar.
function buscarHistoricoDop(){
  const input = document.getElementById("historico-dop-input");
  const msgEl = document.getElementById("historico-dop-search-msg");
  if(!input || !msgEl) return;
  const termo = input.value.trim();
  if(!termo){ msgEl.style.display = "none"; HIST_DOP_FILTRO = null; renderHistoricoRanking(); return; }
  const encontrado = HIST_RANKING_COMPLETO.find(l=>String(l.dop)===termo)
    || HIST_RANKING_COMPLETO.find(l=>String(l.dop).startsWith(termo));
  if(!encontrado){
    msgEl.style.display = "block";
    msgEl.textContent = 'Nenhuma agência com DOP "' + termo + '" no período/filtro atual.';
    HIST_DOP_FILTRO = null;
    renderHistoricoRanking();
    return;
  }
  msgEl.style.display = "none";
  HIST_SELECTED_DOP = encontrado.dop;
  HIST_DOP_FILTRO = encontrado.dop;
  renderHistoricoRanking();
}
// Limpa a busca por DOP e volta a mostrar o ranking inteiro (Top 10 / Ver
// todas) — acionado pelo link "← Ver ranking completo".
function limparBuscaHistoricoDop(){
  const input = document.getElementById("historico-dop-input");
  const msgEl = document.getElementById("historico-dop-search-msg");
  if(input) input.value = "";
  if(msgEl) msgEl.style.display = "none";
  HIST_DOP_FILTRO = null;
  renderHistoricoRanking();
}
const histDopInput = document.getElementById("historico-dop-input");
if(histDopInput){
  histDopInput.addEventListener("keydown", e=>{
    if(e.key === "Enter"){ e.preventDefault(); buscarHistoricoDop(); }
  });
  histDopInput.addEventListener("input", ()=>{
    if(!histDopInput.value.trim()){
      const msgEl = document.getElementById("historico-dop-search-msg");
      if(msgEl) msgEl.style.display = "none";
      if(HIST_DOP_FILTRO){ HIST_DOP_FILTRO = null; renderHistoricoRanking(); }
    }
  });
}
function selecionarHistoricoDop(dop){
  HIST_SELECTED_DOP = dop;
  const porDop = historicoPorDop();
  const serie = porDop[dop] || [];
  const info = DATA.find(d=>String(d.dop)===String(dop));
  document.querySelectorAll("#table-historico .hist-rank-row").forEach(row=> row.classList.remove("row-selected"));
  const rowEl = [...document.querySelectorAll("#table-historico .hist-rank-row")].find(row=>row.dataset.dop===String(dop));
  if(rowEl) rowEl.classList.add("row-selected");
  const card = document.getElementById("historico-chart-card");
  const title = document.getElementById("historico-chart-title");
  if(card) card.style.display = "block";
  if(title) title.textContent = "Evolução diária (últimos 3 meses) — " + (info ? info.agencia : ("DOP " + dop)) + " (DOP " + dop + ")";
  drawLineChart("historico-chart", serie.map(h=>({label: fmtDateShort(h.data), value: num(h.valor)})));
}
// Gráfico de linha simples em SVG puro (sem lib externa), no mesmo estilo
// visual do resto do painel — usa as mesmas variáveis de tema (funciona em
// modo claro e escuro).
function drawLineChart(svgId, points){
  const svg = document.getElementById(svgId);
  if(!svg) return;
  const W = 900, H = 220, padL = 46, padR = 16, padT = 16, padB = 30;
  svg.setAttribute("viewBox", "0 0 " + W + " " + H);
  if(!points.length){
    svg.innerHTML = `<text x="${W/2}" y="${H/2}" text-anchor="middle" fill="var(--text-muted)" font-size="12">Sem dados no período.</text>`;
    return;
  }
  const values = points.map(p=>p.value);
  const maxV = Math.max(...values, 1);
  const innerW = W - padL - padR, innerH = H - padT - padB;
  const stepX = points.length>1 ? innerW/(points.length-1) : 0;
  const xAt = i => padL + stepX*i;
  const yAt = v => padT + innerH - (v/maxV)*innerH;
  let grid = "";
  const steps = 4;
  for(let s=0; s<=steps; s++){
    const v = maxV * s/steps;
    const y = yAt(v);
    grid += `<line x1="${padL}" y1="${y}" x2="${W-padR}" y2="${y}" stroke="var(--grid)" stroke-width="1"/>`;
    grid += `<text x="${padL-8}" y="${y+3}" text-anchor="end" font-size="10" fill="var(--text-muted)">${Math.round(v).toLocaleString("pt-BR")}</text>`;
  }
  let path = "", area = `M ${xAt(0)} ${yAt(0)} `;
  points.forEach((p,i)=>{
    const x = xAt(i), y = yAt(p.value);
    path += (i===0?"M ":"L ") + x + " " + y + " ";
    area += "L " + x + " " + y + " ";
  });
  area += `L ${xAt(points.length-1)} ${yAt(0)} Z`;
  let dots = "", labels = "";
  const labelEvery = Math.max(1, Math.ceil(points.length/8));
  points.forEach((p,i)=>{
    const x = xAt(i), y = yAt(p.value);
    dots += `<circle cx="${x}" cy="${y}" r="3" fill="var(--brand)"/>`;
    if(i===0 || i===points.length-1 || i%labelEvery===0){
      labels += `<text x="${x}" y="${H-8}" text-anchor="middle" font-size="10" fill="var(--text-muted)">${p.label}</text>`;
    }
  });
  svg.innerHTML = grid +
    `<path d="${area}" fill="var(--brand)" opacity="0.10"/>` +
    `<path d="${path}" fill="none" stroke="var(--brand)" stroke-width="2"/>` +
    dots + labels;
}
const histRefreshBtn = document.getElementById("historico-refresh");
if(histRefreshBtn) histRefreshBtn.addEventListener("click", ()=> loadHistorico());
// ==================== ANÁLISE DE BACKLOG (pacotes arrastados) ====================
// Carregado sob demanda (só quando a aba "Análise de Backlog" é aberta pela
// primeira vez) — mesmo padrão do Histórico. Mostra, por DOP, quantos
// pacotes estão parados em cada dia de aging (D1 até D15), vindo direto das
// abas "Forward", "RR" e "BSC failed" da planilha "Gestão da Rotina | PUDO -
// ELIVAN" via WebApp.gs (?tipo=backlog). D0 ("hoje") não entra — só é
// considerado "arrastado" quem já passou de um dia. O analista (RESPONSÁVEL)
// de cada DOP vem direto dessa planilha (coluna "responsavel") — de
// propósito NÃO cruza com a base principal (BASE_TRATADA) nem com os
// filtros do topo, então essa aba é independente do resto do painel. Cada
// item de BACKLOG_DATA já vem marcado com "frente" (Forward/RR/BSC Failed)
// — a lista é agrupada primeiro por frente, depois por analista dentro de
// cada frente.
let BACKLOG_DATA = [];
let BACKLOG_LOADED = false;
// Ordem fixa de exibição das frentes; uma frente que apareça nos dados mas
// não esteja nessa lista vai pro final, em ordem alfabética.
const BACKLOG_FRENTE_ORDEM = ["Forward", "RR", "BSC Failed"];
function backlogFrenteOrdem(frente){
  const i = BACKLOG_FRENTE_ORDEM.indexOf(frente);
  return i === -1 ? BACKLOG_FRENTE_ORDEM.length : i;
}
// Cor do selo de cada frente — Forward laranja (já era o padrão da seção),
// RR azul (info), BSC Failed vermelho (mais grave, "failed" no nome).
function backlogFrenteBadgeClass(frente){
  if(frente === "RR") return "info";
  if(frente === "BSC Failed") return "serious";
  return "warning"; // Forward (e qualquer frente nova não mapeada)
}
// Chave composta "frente||analista" pros Sets de expandido — evita colisão
// se o mesmo nome de analista aparecer em mais de uma frente.
function backlogGrupoKey(frente, resp){ return frente + "||" + resp; }
// Chaves (frente||analista) com o grupo expandido — persiste entre
// re-renders (filtro digitado, refresh dos dados do topo, botão Atualizar)
// pra não fechar o que a usuária já abriu.
let BACKLOG_EXPANDED = new Set();
// Dentro de um grupo já aberto, a lista de DOPs também começa "em prévia"
// (só os primeiros) — chaves aqui = lista completa mostrada.
let BACKLOG_DOPS_EXPANDED = new Set();
const BACKLOG_DOP_PREVIEW = 6;
// Dentro de cada quadrinho de frente, a lista de analistas também começa
// "em prévia" (mesmo padrão acima, um nível para cima) — frente com o nome
// aqui = lista completa de analistas mostrada, em vez de só os primeiros.
let BACKLOG_FRENTES_EXPANDED = new Set();
const BACKLOG_ANALISTA_PREVIEW = 8;
// Filtros próprios dessa seção (Frente/Regional/Sub-Regional/Analista) —
// independentes dos filtros do topo do painel, porque essa aba usa as
// planilhas de frente direto.
let backlogFilters = { frente:"", regional:"", subregional:"", analista:"" };
function backlogUniq(rows, field){ return [...new Set(rows.map(d=>d[field]).filter(Boolean))].sort(); }
// Mesma lógica em cascata do filtro de Notas Fiscais: cada select só mostra
// as opções que ainda fazem sentido dado o que já foi escolhido nos outros.
function backlogFilteredExcept(exceptKey){
  return BACKLOG_DATA.filter(d =>
    (exceptKey==="frente" || !backlogFilters.frente || d.frente===backlogFilters.frente) &&
    (exceptKey==="regional" || !backlogFilters.regional || d.regional===backlogFilters.regional) &&
    (exceptKey==="subregional" || !backlogFilters.subregional || d.subRegional===backlogFilters.subregional) &&
    (exceptKey==="analista" || !backlogFilters.analista || d.resp===backlogFilters.analista)
  );
}
function populateBacklogFilters(){
  populateSelect("backlog-f-frente", backlogUniq(backlogFilteredExcept("frente"),"frente").sort((a,b)=> backlogFrenteOrdem(a)-backlogFrenteOrdem(b)));
  populateSelect("backlog-f-regional", backlogUniq(backlogFilteredExcept("regional"),"regional"));
  populateSelect("backlog-f-subregional", backlogUniq(backlogFilteredExcept("subregional"),"subRegional"));
  populateSelect("backlog-f-analista", backlogUniq(backlogFilteredExcept("analista"),"resp"));
}
["frente","regional","subregional","analista"].forEach(k=>{
  const elSel = document.getElementById("backlog-f-"+k);
  if(elSel) elSel.addEventListener("change", e=>{
    backlogFilters[k]=e.target.value;
    populateBacklogFilters();
    renderBacklogAnalise(backlogSearchInput ? backlogSearchInput.value : "");
  });
});
async function loadBacklogAnalise(){
  const el = document.getElementById("backlog-list");
  // Igual o Histórico: a aba "Forward" (Backlog OPS) pode ser grande, então
  // avisamos que pode demorar e damos um timeout bem mais folgado que os
  // 30s anteriores (estavam estourando o "Tempo esgotado ao buscar dados").
  if(el) el.innerHTML = loaderHtml('Carregando análise de backlog… (pode levar até um minuto)');
  try{
    const sep = API_URL.indexOf("?") >= 0 ? "&" : "?";
    const json = await fetchViaIframe(API_URL + sep + "tipo=backlog", 75000);
    BACKLOG_DATA = Array.isArray(json) ? json : (json.backlog || []);
    BACKLOG_LOADED = true;
    populateBacklogFilters();
    renderBacklogAnalise(backlogSearchInput ? backlogSearchInput.value : "");
  } catch(err){
    console.error(err);
    if(el) el.innerHTML = '<div class="empty-state">Não foi possível carregar a análise de backlog agora (' + err.message + ').</div>';
  }
}
// "D_1" -> "D1" (só pra exibição)
function diaLabel(chave){
  return chave.replace("D_", "D");
}
// A partir de D3 é considerado crítico (combinado com a usuária) — D1/D2
// ainda não. Soma tudo que for D3 pra cima, de um DOP.
function backlogD3Mais(b){
  return Object.entries(b.dias||{}).reduce((s,[k,qtd]) => (+k.replace("D_","")) >= 3 ? s + qtd : s, 0);
}
// Em vez de um selo por dia (D1, D2, D3... até D15 — poluído demais), agrupa
// em faixas de severidade: D1-D2 (ainda não crítico, cinza/discreto),
// D3-D5 (atenção), D6-D10 (sério), D11+ (crítico). Cada DOP mostra no máximo
// 4 selos em vez de até 15.
function backlogDiasChips(b){
  const dias = b.dias || {};
  const faixa = (lo,hi) => Object.entries(dias).reduce((s,[k,qtd])=>{
    const n = +k.replace("D_","");
    return (n>=lo && n<=hi) ? s+qtd : s;
  },0);
  const faixas = [
    { lo:1, hi:2, cls:"good", label:"D1-D2", mute:true },
    { lo:3, hi:5, cls:"warning", label:"D3-D5" },
    { lo:6, hi:10, cls:"serious", label:"D6-D10" },
    { lo:11, hi:999, cls:"critical", label:"D11+" }
  ];
  return faixas.map(f=>{
    const qtd = faixa(f.lo, f.hi);
    if(qtd<=0) return "";
    const estilo = f.mute ? ' style="margin:2px 4px 2px 0; opacity:.7;"' : ' style="margin:2px 4px 2px 0;"';
    return `<span class="badge ${f.cls}"${estilo}><span class="ic"></span>${f.label} · ${qtd.toLocaleString("pt-BR")}</span>`;
  }).join("");
}
// Procura esse DOP nos dados de Análise de Backlog (Forward/RR/BSC) — usado
// pelo Detalhe da Agência pra trazer "Backlog Envelhecido" e "% Atrasados"
// direto dessa planilha (mais atual pra esses DOPs) em vez da BASE_TRATADA,
// quando o DOP tiver dado lá. Se o mesmo DOP aparecer em mais de uma frente
// (raro), usa a mais grave (mais pacotes parados).
function backlogInfoForDop(dop){
  if(!BACKLOG_LOADED || !BACKLOG_DATA.length) return null;
  const alvo = String(dop).trim().toLowerCase();
  const matches = BACKLOG_DATA.filter(b => String(b.dop).trim().toLowerCase() === alvo);
  if(!matches.length) return null;
  return matches.reduce((pior, b) => (!pior || b.totalArrastado > pior.totalArrastado) ? b : pior, null);
}
// Todas as linhas desse DOP na Análise de Backlog, uma por frente onde ele
// aparece (normalmente só uma, mas o mesmo DOP pode existir em mais de uma
// planilha) — usado pro total consolidado de Backlog Envelhecido.
function backlogAllMatchesForDop(dop){
  if(!BACKLOG_LOADED || !BACKLOG_DATA.length) return [];
  const alvo = String(dop).trim().toLowerCase();
  return BACKLOG_DATA.filter(b => String(b.dop).trim().toLowerCase() === alvo);
}
// Monta { frente: totalEnvelhecido } somando todas as linhas desse DOP,
// já incluindo as três frentes padrão com 0 quando não têm dado, pra sempre
// mostrar o comparativo completo (Forward/RR/BSC Failed) no Detalhe.
function backlogEnvelhecidoPorFrente(matches){
  const porFrente = {};
  BACKLOG_FRENTE_ORDEM.forEach(f => { porFrente[f] = 0; });
  matches.forEach(b=>{
    const frente = b.frente || "Não informado";
    porFrente[frente] = (porFrente[frente] || 0) + backlogEnvelhecidoFrente(b);
  });
  return porFrente;
}
// HTML do detalhamento por frente (usado dentro do quadro "Backlog
// Envelhecido" do Detalhe da Agência) — mesma ordem/cores já usadas na
// Análise de Backlog (backlogFrenteOrdem/backlogFrenteBadgeClass).
function backlogEnvelhecidoBreakdownHtml(porFrente){
  const frentes = [...new Set([...BACKLOG_FRENTE_ORDEM, ...Object.keys(porFrente)])]
    .sort((a,b)=> backlogFrenteOrdem(a) - backlogFrenteOrdem(b));
  return frentes.map(f=>{
    const v = porFrente[f] || 0;
    return `<div class="backlog-envelhecido-row"><span class="badge ${backlogFrenteBadgeClass(f)}"><span class="ic"></span>${f}</span><span class="val">${v.toLocaleString("pt-BR")}</span></div>`;
  }).join("");
}
// "Envelhecido" = pacotes em D3 pra cima — mesmo corte de "crítico" já
// combinado pra prioridade na Análise de Backlog (D1-D2 ainda não é
// considerado envelhecido/crítico). Mesma soma de backlogD3Mais, só que
// calculada direto (essa função é usada antes de o objeto ganhar d3Mais).
function backlogEnvelhecidoFrente(b){
  return backlogD3Mais(b);
}
// % do Backlog_total do DOP (coluna da planilha da frente) que já está
// parado (D1+). Sem Backlog_total > 0 mas com pacote parado, considera 100%
// (só tem o que está atrasado).
function backlogPctAtrasadosFrente(b){
  if(b.backlogTotal > 0) return (b.totalArrastado / b.backlogTotal) * 100;
  return b.totalArrastado > 0 ? 100 : 0;
}
// Agrupado primeiro por FRENTE (Forward/RR/BSC Failed), depois por analista
// (RESPONSÁVEL) dentro de cada frente: cada linha de analista tem o total de
// DOPs/pacotes parados sob ele; clicar expande a lista dos DOPs (agência +
// dias de aging), igual mostrava antes, só que agora com mais um nível.
function renderBacklogAnalise(filtro){
  const el = document.getElementById("backlog-list");
  const badge = document.getElementById("nav-backlog-badge");
  if(!el) return;
  if(!BACKLOG_LOADED){
    el.innerHTML = '<div class="empty-state">Abra esta aba para carregar a análise de backlog.</div>';
    return;
  }
  const termo = (filtro||"").trim().toLowerCase();
  // Independente dos filtros do topo (Responsável, Estação, Cidade...) —
  // essa aba usa as planilhas de frente direto, sem cruzar com a base
  // principal do painel (ver comentário acima). Frente/Regional/Sub-Regional/
  // Analista têm filtro próprio (backlogFilters), só dessa seção.
  const linhas = BACKLOG_DATA.filter(b =>
    (!backlogFilters.frente || b.frente===backlogFilters.frente) &&
    (!backlogFilters.regional || b.regional===backlogFilters.regional) &&
    (!backlogFilters.subregional || b.subRegional===backlogFilters.subregional) &&
    (!backlogFilters.analista || b.resp===backlogFilters.analista)
  ).map(b => ({ ...b, d3Mais: backlogD3Mais(b) }));
  if(badge) badge.textContent = linhas.length;
  if(!linhas.length){
    el.innerHTML = '<div class="empty-state">Nenhum DOP com pacotes parados (D1+) para os filtros atuais.</div>';
    return;
  }
  // Monta um grupo de analista (usado dentro de cada frente).
  function montaGrupoAnalista(frente, resp, rows){
    // DOPs mais graves (mais pacotes em D3+) primeiro — é o que importa
    // olhar primeiro dentro do analista.
    const rowsOrdenadas = [...rows].sort((a,b)=> (b.d3Mais - a.d3Mais) || (b.totalArrastado - a.totalArrastado));
    return {
      frente, resp, rows: rowsOrdenadas, totalDops: rows.length,
      totalArrastado: rows.reduce((s,b)=>s+b.totalArrastado,0),
      totalD3Mais: rows.reduce((s,b)=>s+b.d3Mais,0)
    };
  }
  // Agrupa por frente, e dentro de cada frente por analista.
  const porFrente = new Map();
  linhas.forEach(b=>{
    const frente = b.frente || "Não informado";
    const resp = b.resp || "Não informado";
    if(!porFrente.has(frente)) porFrente.set(frente, new Map());
    const porAnalista = porFrente.get(frente);
    if(!porAnalista.has(resp)) porAnalista.set(resp, []);
    porAnalista.get(resp).push(b);
  });
  function montaFrentes(porFrenteMap, termo){
    let frentes = [...porFrenteMap.entries()].map(([frente, porAnalista])=>{
      let grupos = [...porAnalista.entries()].map(([resp, rows])=> montaGrupoAnalista(frente, resp, rows));
      if(termo){
        grupos = grupos
          .map(g=>{
            const matchResp = g.resp.toLowerCase().includes(termo);
            const rows = matchResp ? g.rows : g.rows.filter(b =>
              String(b.dop).toLowerCase().includes(termo) || (b.agencia||"").toLowerCase().includes(termo));
            return rows.length ? montaGrupoAnalista(frente, g.resp, rows) : null;
          })
          .filter(Boolean);
      }
      // Prioriza quem tem mais pacotes em D3+ (o que é crítico agora); total
      // geral só desempata.
      grupos.sort((a,b)=> (b.totalD3Mais - a.totalD3Mais) || (b.totalArrastado - a.totalArrastado));
      return {
        frente, grupos,
        totalDops: grupos.reduce((s,g)=>s+g.totalDops,0),
        totalArrastado: grupos.reduce((s,g)=>s+g.totalArrastado,0),
        totalD3Mais: grupos.reduce((s,g)=>s+g.totalD3Mais,0)
      };
    }).filter(f=> f.grupos.length);
    // Ordem fixa de frentes (Forward, RR, BSC Failed, depois qualquer outra
    // em ordem alfabética) — não muda com o resultado da busca/filtro.
    frentes.sort((a,b)=> backlogFrenteOrdem(a.frente) - backlogFrenteOrdem(b.frente));
    return frentes;
  }
  const listaFrentes = montaFrentes(porFrente, termo);
  if(!listaFrentes.length){
    el.innerHTML = '<div class="empty-state">Nenhum resultado para essa busca.</div>';
    return;
  }
  // Com busca ativa, os grupos com resultado abrem sozinhos e mostram a
  // lista de DOPs inteira (pra não esconder o que foi encontrado); sem
  // busca, respeita o que a usuária já tinha aberto/fechado manualmente.
  el.innerHTML = listaFrentes.map(f=>{
    // Com busca ativa mostra todos os analistas da frente que bateram (senão
    // esconderia resultado); sem busca, respeita o que a usuária já expandiu
    // "Ver todos os analistas" nesse quadrinho — senão só os primeiros
    // BACKLOG_ANALISTA_PREVIEW, pra não virar uma lista gigante na tela.
    const analistasAbertos = termo ? true : BACKLOG_FRENTES_EXPANDED.has(f.frente);
    const gruposVisiveis = analistasAbertos ? f.grupos : f.grupos.slice(0, BACKLOG_ANALISTA_PREVIEW);
    const temMaisAnalistas = f.grupos.length > BACKLOG_ANALISTA_PREVIEW;
    const gruposHtml = gruposVisiveis.map(g=>{
      const key = backlogGrupoKey(g.frente, g.resp);
      const aberto = termo ? true : BACKLOG_EXPANDED.has(key);
      const dopsAbertos = termo ? true : BACKLOG_DOPS_EXPANDED.has(key);
      const dopsVisiveis = dopsAbertos ? g.rows : g.rows.slice(0, BACKLOG_DOP_PREVIEW);
      const temMais = g.rows.length > BACKLOG_DOP_PREVIEW;
      const dopsRowsHtml = !aberto ? "" : dopsVisiveis.map(b => {
        const local = [b.cidade, b.estacao].filter(Boolean).join(" · ");
        return `
        <div class="alert-row backlog-dop-row" data-dop="${b.dop}" style="grid-template-columns:1.4fr 0.9fr; cursor:pointer; align-items:flex-start;" title="Clique para ver o detalhe de ${b.agencia}">
          <div><div class="alert-name">${b.agencia}</div><div class="alert-sub">DOP ${b.dop}${local ? " · " + local : ""} · ${b.totalArrastado.toLocaleString("pt-BR")} pacote${b.totalArrastado>1?'s':''} parado${b.totalArrastado>1?'s':''}</div></div>
          <div style="display:flex; flex-wrap:wrap; justify-content:flex-end;">${backlogDiasChips(b)}</div>
        </div>`;
      }).join("");
      const toggleDopsHtml = (!aberto || !temMais) ? "" : `
        <div class="backlog-dops-toggle" data-key="${key}" style="cursor:pointer; color:var(--brand); font-weight:600; font-size:12px; padding:8px 4px 2px;">
          ${dopsAbertos ? "− Mostrar menos" : `+ Ver todos os ${g.rows.length} DOPs`}
        </div>`;
      return `
        <div class="backlog-analista-group">
          <div class="alert-row backlog-analista-row" data-key="${key}" style="grid-template-columns:16px 1fr auto; cursor:pointer;">
            <span class="backlog-caret ${aberto?'open':''}">▸</span>
            <div><div class="alert-name">${g.resp}</div><div class="alert-sub">${g.totalDops} DOP${g.totalDops>1?'s':''} · ${g.totalArrastado.toLocaleString("pt-BR")} parado${g.totalArrastado>1?'s':''} no total</div></div>
            <span class="badge ${g.totalD3Mais>0 ? 'critical' : 'good'}"><span class="ic"></span>${g.totalD3Mais>0 ? g.totalD3Mais.toLocaleString("pt-BR") + " em D3+" : "sem D3+"}</span>
          </div>
          <div class="backlog-analista-dops"${aberto?"":' style="display:none"'}>${dopsRowsHtml}${toggleDopsHtml}</div>
        </div>`;
    }).join("");
    const toggleAnalistasHtml = (!temMaisAnalistas) ? "" : `
      <div class="backlog-analistas-toggle" data-frente="${f.frente}">
        ${analistasAbertos ? "− Mostrar menos analistas" : `+ Ver todos os ${f.grupos.length} analistas`}
      </div>`;
    return `
      <div class="backlog-frente-group">
        <div class="backlog-frente-head">
          <span class="badge ${backlogFrenteBadgeClass(f.frente)}"><span class="ic"></span>${f.frente}</span>
          <span class="backlog-frente-summary">${f.totalDops} DOP${f.totalDops>1?'s':''} · ${f.totalArrastado.toLocaleString("pt-BR")} parado${f.totalArrastado>1?'s':''} · ${f.totalD3Mais>0 ? f.totalD3Mais.toLocaleString("pt-BR") + " em D3+" : "sem D3+"}</span>
        </div>
        ${gruposHtml}
        ${toggleAnalistasHtml}
      </div>`;
  }).join("");
  el.querySelectorAll(".backlog-analista-row[data-key]").forEach(row=>{
    row.addEventListener("click", ()=>{
      const key = row.dataset.key;
      if(BACKLOG_EXPANDED.has(key)) BACKLOG_EXPANDED.delete(key); else BACKLOG_EXPANDED.add(key);
      renderBacklogAnalise(backlogSearchInput ? backlogSearchInput.value : "");
    });
  });
  el.querySelectorAll(".backlog-dops-toggle[data-key]").forEach(row=>{
    row.addEventListener("click", ev=>{
      ev.stopPropagation();
      const key = row.dataset.key;
      if(BACKLOG_DOPS_EXPANDED.has(key)) BACKLOG_DOPS_EXPANDED.delete(key); else BACKLOG_DOPS_EXPANDED.add(key);
      renderBacklogAnalise(backlogSearchInput ? backlogSearchInput.value : "");
    });
  });
  el.querySelectorAll(".backlog-dop-row[data-dop]").forEach(row=>{
    row.addEventListener("click", ev=>{ ev.stopPropagation(); openDetail(row.dataset.dop); });
  });
  el.querySelectorAll(".backlog-analistas-toggle[data-frente]").forEach(row=>{
    row.addEventListener("click", ()=>{
      const frente = row.dataset.frente;
      if(BACKLOG_FRENTES_EXPANDED.has(frente)) BACKLOG_FRENTES_EXPANDED.delete(frente); else BACKLOG_FRENTES_EXPANDED.add(frente);
      renderBacklogAnalise(backlogSearchInput ? backlogSearchInput.value : "");
    });
  });
}
const backlogSearchInput = document.getElementById("backlog-search");
if(backlogSearchInput){
  backlogSearchInput.addEventListener("input", e=> renderBacklogAnalise(e.target.value));
}
const backlogRefreshBtn = document.getElementById("backlog-refresh");
if(backlogRefreshBtn) backlogRefreshBtn.addEventListener("click", ()=> loadBacklogAnalise());
// ==================== NOTAS FISCAIS PENDENTES ====================
// Mesmo padrão sob demanda do Histórico/Backlog: só busca (?tipo=pagamentos)
// quando a aba é aberta pela 1ª vez. Filtros (mês/regional/sub-regional/
// analista) e agregação por grupo são feitos aqui no navegador, direto em
// cima da lista de DOPs pendentes que vem do Apps Script (que já varre
// Julho, Agosto etc. e já deriva a regional — ver pagColetarPendentes em
// Pagamentos.gs).
let NF_DATA = [];
// Total de DOPs (e de pendentes) por mês / sub-regional / analista — vem do
// Apps Script no campo "totais" (aba PAGAMENTOS_TOTAIS). É o que permite
// mostrar, por analista, "total de DOPs", "pendentes" e "% pendente". Se o
// Apps Script ainda for a versão antiga (sem "totais"), fica vazio e o
// quadro "Por Analista" mostra só a contagem de pendentes, como antes.
let NF_TOTAIS = [];
let NF_LOADED = false;
// Controle de "frescor" dos dados da aba Pagamentos:
//  NF_BASE_EM  -> quando o Apps Script leu a planilha PAYMENTS pela última
//                 vez (campo "updatedAt" da resposta = hora do PAG_CACHE);
//  NF_ERRO     -> motivo da última tentativa de atualizar, se falhou. Os
//                 números da carga anterior continuam na tela, mas com aviso;
//  NF_LOADING  -> evita duas buscas ao mesmo tempo (botão + automático).
let NF_BASE_EM = null;
let NF_ERRO = null;
let NF_LOADING = false;
// O gatilho pagAtualizarPainel roda a cada 15 min; passou disso com folga,
// a base está parada (gatilho inexistente ou falhando).
const NF_BASE_VELHA_MS = 40 * 60 * 1000;
let nfFilters = { mes:"", regional:"", subregional:"", analista:"", statussvp:"", statuspag:"" };
// Emissões de NF já agregadas pelo Apps Script (campo "emissoes" da resposta
// de ?tipo=pagamentos): uma linha por mês / regional / sub-regional /
// analista / status SVP / status de pagamento, com "qtd" (nº de NFs) e
// "valor" (R$ a pagar). Alimenta o "Resumo Financeiro" e o "Monitoramento
// de Emissões". Se o Apps Script ainda não devolver "emissoes", os dois
// quadros mostram um aviso e o resto da aba continua funcionando igual.
let NF_EMISSOES = [];
let NF_EMISSOES_OK = false;
const NF_MESES_PT = ['Janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro'];
// "2026-08-01T03:00:00.000Z" -> "Agosto/2026". Usa UTC (não o fuso do
// navegador) pra não "voltar" um mês perto da virada, mesma lógica do
// fmtDateShort do Histórico. Se não for uma data reconhecível, devolve o
// valor original sem mexer.
function nfFormatMes(v){
  if(v===null || v===undefined || v==="") return "—";
  const d = new Date(v);
  if(!isNaN(d) && /^\d{4}-\d{2}-\d{2}/.test(String(v))){
    return NF_MESES_PT[d.getUTCMonth()] + "/" + d.getUTCFullYear();
  }
  return String(v);
}
function nfHoraTxt(d){
  const hoje = new Date();
  const mesmoDia = d.getDate()===hoje.getDate() && d.getMonth()===hoje.getMonth() && d.getFullYear()===hoje.getFullYear();
  const hora = d.toLocaleTimeString("pt-BR",{hour:"2-digit",minute:"2-digit"});
  return mesmoDia ? hora : (d.toLocaleDateString("pt-BR",{day:"2-digit",month:"2-digit"}) + " às " + hora);
}
// Linha logo abaixo do título da aba: diz de quando são os números e avisa
// quando eles estão velhos (atualização falhou ou base parada).
function renderNfStatus(){
  const el = document.getElementById("nf-status");
  if(!el) return;
  const aviso = t => `<span style="color:var(--critical);font-weight:600;">⚠ ${t}</span>`;
  const partes = [];
  const d = NF_BASE_EM ? new Date(NF_BASE_EM) : null;
  const baseOk = d && !isNaN(d);
  if(NF_LOADING && !NF_LOADED){ el.innerHTML = ""; return; }
  if(baseOk) partes.push("Planilha PAYMENTS lida às <b>" + nfHoraTxt(d) + "</b>");
  if(NF_LOADING) partes.push("atualizando…");
  if(NF_ERRO && NF_LOADED){
    partes.push(aviso("Não consegui atualizar agora (" + esc(NF_ERRO) + "). Os números abaixo são da leitura anterior e podem estar desatualizados."));
  } else if(baseOk && (Date.now() - d.getTime()) > NF_BASE_VELHA_MS){
    partes.push(aviso("A base não é atualizada há mais de 40 minutos. O gatilho pagAtualizarPainel (Apps Script) pode estar parado — os números podem não bater com a planilha."));
  }
  el.innerHTML = partes.join(" · ");
}
// "silencioso" = atualização automática: não troca nada na tela por
// animação de carregamento, só a linha de status.
async function loadNotasFiscais(silencioso){
  if(NF_LOADING) return;
  NF_LOADING = true;
  const el = document.getElementById("nf-rank-regional");
  // Só mostra a animação na 1ª carga; nas seguintes os números atuais
  // ficam na tela até os novos chegarem.
  if(el && !NF_LOADED) el.innerHTML = loaderHtml('Carregando pendências…');
  renderNfStatus();
  try{
    const sep = API_URL.indexOf("?") >= 0 ? "&" : "?";
    // Timeout maior que o padrão: se a aba PAGAMENTOS ainda não tiver sido
    // populada nenhuma vez (gatilho ainda não rodou), o Apps Script cai
    // pro cálculo ao vivo (lento, lê Julho/Agosto inteiros) só nessa
    // primeira vez — depois disso o cache já existe e a resposta é rápida.
    const json = await fetchViaIframe(API_URL + sep + "tipo=pagamentos", 60000);
    const brutos = Array.isArray(json) ? json : (json.pendentes || []);
    // A coluna "mes" na planilha vem como data de verdade, não texto — o
    // Apps Script devolve isso em JSON como "2026-08-01T03:00:00.000Z".
    // Convertemos aqui pra "Agosto/2026" antes de tudo, pra filtro e tabela
    // já usarem o texto legível (em vez do timestamp cru que aparecia no
    // seletor "Mês").
    NF_DATA = brutos.map(d => Object.assign({}, d, { mes: nfFormatMes(d.mes) }));
    const totaisBrutos = (!Array.isArray(json) && Array.isArray(json.totais)) ? json.totais : [];
    NF_TOTAIS = totaisBrutos.map(t => Object.assign({}, t, {
      mes: nfFormatMes(t.mes),
      total: Number(t.total) || 0,
      pendentes: Number(t.pendentes) || 0
    }));
    NF_EMISSOES_OK = !Array.isArray(json) && Array.isArray(json.emissoes);
    NF_EMISSOES = (NF_EMISSOES_OK ? json.emissoes : []).map(e => ({
      mes: nfFormatMes(e.mes),
      regional: nfTxt(e.regional),
      subRegional: nfTxt(e.subRegional),
      analista: nfTxt(e.analista),
      statusSvp: nfTxt(e.statusSvp) || "(vazio)",
      statusPag: nfTxt(e.statusPagamento),
      qtd: Number(e.qtd) || 0,
      valor: Number(e.valor) || 0
    }));
    NF_BASE_EM = (!Array.isArray(json) && json.updatedAt) || null;
    NF_ERRO = null;
    NF_LOADED = true;
    NF_LOADING = false;
    populateNfFilters();
    renderNotasFiscais();
  } catch(err){
    console.error(err);
    NF_LOADING = false;
    NF_ERRO = err.message || "erro desconhecido";
    if(NF_LOADED){
      // Já havia números na tela: eles ficam, mas a linha de status avisa
      // que são da leitura anterior (antes o erro aparecia só num quadro e
      // o resto parecia atualizado).
      renderNotasFiscais();
    } else if(el){
      el.innerHTML = '<div class="empty-state">Não foi possível carregar as pendências agora (' + esc(NF_ERRO) + ').</div>';
    }
  }
  renderNfStatus();
}
function nfUniq(rows, field){ return [...new Set(rows.map(d=>d[field]).filter(Boolean))].sort(); }
// Filtra NF_DATA pelos filtros já escolhidos, exceto o campo "exceptKey" —
// usado pra popular cada select só com as opções que ainda fazem sentido
// dado o que já foi selecionado nos outros (ex: escolher a Sub-Regional
// "CO" deixa o select de Analista mostrando só quem tem DOP pendente na CO).
function nfFilteredExcept(exceptKey){
  return NF_DATA.filter(d =>
    (exceptKey==="mes" || !nfFilters.mes || d.mes===nfFilters.mes) &&
    (exceptKey==="regional" || !nfFilters.regional || d.regional===nfFilters.regional) &&
    (exceptKey==="subregional" || !nfFilters.subregional || d.subRegional===nfFilters.subregional) &&
    (exceptKey==="analista" || !nfFilters.analista || d.analista===nfFilters.analista)
  );
}
function nfTxt(v){ return String(v==null ? "" : v).trim(); }
// Mesma ideia do nfFilteredExcept, para as linhas de emissões (que têm dois
// filtros a mais: Status SVP e Status Pagamento).
function nfEmFilteredExcept(exceptKey){
  return NF_EMISSOES.filter(e =>
    (exceptKey==="mes" || !nfFilters.mes || e.mes===nfFilters.mes) &&
    (exceptKey==="regional" || !nfFilters.regional || e.regional===nfFilters.regional) &&
    (exceptKey==="subregional" || !nfFilters.subregional || e.subRegional===nfFilters.subregional) &&
    (exceptKey==="analista" || !nfFilters.analista || e.analista===nfFilters.analista) &&
    (exceptKey==="statussvp" || !nfFilters.statussvp || e.statusSvp===nfFilters.statussvp) &&
    (exceptKey==="statuspag" || !nfFilters.statuspag || e.statusPag===nfFilters.statuspag)
  );
}
// Opções dos filtros de cima = o que existe nos pendentes + o que existe nas
// emissões (um mês sem nenhum pendente continua aparecendo no seletor).
function nfOpcoes(exceptKey, campo){
  return [...new Set(nfUniq(nfFilteredExcept(exceptKey), campo).concat(nfUniq(nfEmFilteredExcept(exceptKey), campo)))].sort();
}
function populateNfFilters(){
  populateSelect("nf-f-mes", nfOpcoes("mes","mes"));
  populateSelect("nf-f-regional", nfOpcoes("regional","regional"));
  populateSelect("nf-f-subregional", nfOpcoes("subregional","subRegional"));
  populateSelect("nf-f-analista", nfOpcoes("analista","analista"));
  populateSelect("nf-f-statussvp", nfUniq(nfEmFilteredExcept("statussvp"),"statusSvp"));
  populateSelect("nf-f-statuspag", nfUniq(nfEmFilteredExcept("statuspag"),"statusPag"));
}
["mes","regional","subregional","analista","statussvp","statuspag"].forEach(k=>{
  const elSel = document.getElementById("nf-f-"+k);
  if(elSel) elSel.addEventListener("change", e=>{ nfFilters[k]=e.target.value; populateNfFilters(); renderNotasFiscais(); });
});
function nfFiltered(){
  return NF_DATA.filter(d =>
    (!nfFilters.mes || d.mes===nfFilters.mes) &&
    (!nfFilters.regional || d.regional===nfFilters.regional) &&
    (!nfFilters.subregional || d.subRegional===nfFilters.subregional) &&
    (!nfFilters.analista || d.analista===nfFilters.analista)
  );
}
// Mesmos filtros de nfFiltered(), aplicados aos totais por analista.
function nfTotaisFiltered(){
  return NF_TOTAIS.filter(t =>
    (!nfFilters.mes || t.mes===nfFilters.mes) &&
    (!nfFilters.regional || t.regional===nfFilters.regional) &&
    (!nfFilters.subregional || t.subRegional===nfFilters.subregional) &&
    (!nfFilters.analista || t.analista===nfFilters.analista)
  );
}
function nfPct(pend, total){
  if(!total) return "—";
  const p = pend/total*100;
  return (p>0 && p<1 ? p.toFixed(1) : Math.round(p)) + "%";
}
// Quadro "Por Analista": para cada analista, total de DOPs no nome dele,
// quantos ainda estão em "Analista validar" (nota pendente) e o % pendente.
// Ordenado por quem tem mais pendentes.
function nfRenderAnalistaList(targetId, totais){
  const el = document.getElementById(targetId);
  if(!el) return;
  const m = {};
  totais.forEach(t=>{
    const k = t.analista || "(vazio)";
    const o = m[k] || (m[k] = { label:k, total:0, pend:0 });
    o.total += t.total; o.pend += t.pendentes;
  });
  const grupos = Object.values(m).filter(g=>g.total>0)
    .sort((a,b)=> b.pend-a.pend || b.total-a.total || a.label.localeCompare(b.label));
  if(!grupos.length){ el.innerHTML = emptyRow(); return; }
  // Estilos embutidos (em vez das classes hist-rank-*) pra não depender do
  // layout de celular dessas classes, que só prevê uma coluna de valor.
  const cols = "display:grid;grid-template-columns:18px minmax(0,1fr) 44px 66px 50px;align-items:center;gap:10px;";
  const numCss = "text-align:right;font-variant-numeric:tabular-nums;white-space:nowrap;";
  const head = `<div class="col-head" style="${cols}padding:2px 10px 8px 6px;">
      <span></span><span>Analista</span><span style="${numCss}">Total</span><span style="${numCss}">Pendentes</span><span style="${numCss}">% pend.</span>
    </div>`;
  const linhas = grupos.map((g,i)=>{
    const frac = g.total ? Math.min(g.pend/g.total,1)*100 : 0;
    return `
    <div style="${cols}padding:7px 6px;font-size:12.5px;" title="${g.label}: ${g.pend} pendente(s) de ${g.total} DOP(s)">
      <div class="rank-num">${i+1}</div>
      <div style="min-width:0;">
        <div class="hist-rank-label">${g.label}</div>
        <div class="hbar-track" style="height:5px;margin-top:4px;"><div class="hbar-fill" style="width:${frac.toFixed(1)}%;background:var(--brand)"></div></div>
      </div>
      <div style="${numCss}color:var(--text-secondary);">${g.total}</div>
      <div style="${numCss}color:var(--text-primary);font-weight:700;">${g.pend}</div>
      <div style="${numCss}color:var(--brand);font-weight:700;">${nfPct(g.pend, g.total)}</div>
    </div>`;
  }).join("");
  el.innerHTML = head + `<div class="hist-rank-rows hist-rank-rows-scroll">${linhas}</div>`;
}
function nfGroupCount(rows, field){
  const m = {};
  rows.forEach(d=>{ const k = d[field] || "(vazio)"; m[k] = (m[k]||0)+1; });
  return Object.entries(m).map(([label,value])=>({label,value})).sort((a,b)=>b.value-a.value);
}
function nfRenderRankList(targetId, groups){
  const el = document.getElementById(targetId);
  if(!el) return;
  if(!groups.length){ el.innerHTML = emptyRow(); return; }
  const max = Math.max(...groups.map(g=>g.value),1);
  el.innerHTML = groups.map((g,i)=>`
    <div class="hist-rank-row" style="grid-template-columns:18px 1fr 60px 42px;">
      <div class="rank-num">${i+1}</div>
      <div class="hist-rank-label">${g.label}</div>
      <div class="hbar-track"><div class="hbar-fill" style="width:${(g.value/max*100).toFixed(1)}%;background:var(--brand)"></div></div>
      <div class="hist-rank-val">${g.value}</div>
    </div>`).join("");
}
// ---------- Emissões: Resumo Financeiro + Monitoramento ----------
// Cor segue o STATUS (não a posição): o mesmo status tem sempre a mesma cor,
// com qualquer filtro. Status fora desta lista entram na sequência extra e,
// depois dela, em cinza.
const NF_EM_ORDEM = ["aguardando validacao","upload via svp","upload via forms","w/ cnae","w/o cnae"];
const NF_EM_CORES = ["var(--series-2)","var(--series-3)","var(--series-1)","var(--series-4)","var(--series-7)"];
const NF_EM_CORES_EXTRA = ["var(--series-5)"];
function nfEmKey(s){ return String(s||"").normalize("NFD").replace(/[̀-ͯ]/g,"").toLowerCase().trim(); }
// Lista fixa dos status existentes na base inteira (não só no filtro), na
// ordem de empilhamento, cada um com a sua cor.
function nfEmStatusLista(){
  const nomes = [...new Set(NF_EMISSOES.map(e=>e.statusSvp))];
  const pos = n => { const i = NF_EM_ORDEM.indexOf(nfEmKey(n)); return i<0 ? 99 : i; };
  nomes.sort((a,b)=> pos(a)-pos(b) || a.localeCompare(b));
  let extra = 0;
  return nomes.map(n=>{
    const i = NF_EM_ORDEM.indexOf(nfEmKey(n));
    const cor = i>=0 ? NF_EM_CORES[i] : (NF_EM_CORES_EXTRA[extra++] || "var(--text-muted)");
    return { nome:n, cor };
  });
}
function nfBRL(v){ return (v||0).toLocaleString("pt-BR",{style:"currency",currency:"BRL"}); }
function nfInt(v){ return Math.round(v||0).toLocaleString("pt-BR"); }
function nfPct2(parte, total){ return total ? (parte/total*100).toFixed(2).replace(".",",")+"%" : "—"; }
function nfEmAviso(){
  return '<div class="empty-state">Os dados de emissões ainda não chegam do Apps Script. Falta atualizar o Pagamentos.gs para enviar o campo "emissoes".</div>';
}
function renderNfEmResumo(){
  const el = document.getElementById("nf-em-resumo");
  if(!el) return;
  if(!NF_EMISSOES_OK){ el.innerHTML = nfEmAviso(); return; }
  const rows = nfEmFilteredExcept("");
  const m = {};
  rows.forEach(e=>{ const o = m[e.statusSvp] || (m[e.statusSvp] = {nome:e.statusSvp, qtd:0, valor:0}); o.qtd += e.qtd; o.valor += e.valor; });
  const grupos = Object.values(m).sort((a,b)=> b.qtd-a.qtd || b.valor-a.valor);
  if(!grupos.length){ el.innerHTML = '<div class="empty-state">Nenhuma emissão para os filtros atuais.</div>'; return; }
  const totQtd = grupos.reduce((s,g)=>s+g.qtd,0), totValor = grupos.reduce((s,g)=>s+g.valor,0);
  const cores = {}; nfEmStatusLista().forEach(s=>{ cores[s.nome] = s.cor; });
  const th = "cursor:default;";
  const linhas = grupos.map(g=>`<tr style="cursor:default;">
      <td><span style="display:inline-block;width:10px;height:10px;border-radius:2px;background:${cores[g.nome]||"var(--text-muted)"};margin-right:8px;vertical-align:-1px;"></span>${esc(g.nome)}</td>
      <td class="num">${nfInt(g.qtd)}</td>
      <td class="num">${nfBRL(g.valor)}</td>
      <td class="num" style="font-weight:700;">${nfPct2(g.valor, totValor)}</td>
    </tr>`).join("");
  el.innerHTML = `<table class="data">
    <thead><tr><th style="${th}">Status SVP</th><th class="num" style="${th}">Qtd. NFe</th><th class="num" style="${th}">Valor a Pagar</th><th class="num" style="${th}">% do Valor</th></tr></thead>
    <tbody>${linhas}</tbody>
    <tfoot><tr style="font-weight:700;">
      <td style="border-bottom:none;border-top:1px solid var(--border);">Total geral</td>
      <td class="num" style="border-bottom:none;border-top:1px solid var(--border);">${nfInt(totQtd)}</td>
      <td class="num" style="border-bottom:none;border-top:1px solid var(--border);">${nfBRL(totValor)}</td>
      <td class="num" style="border-bottom:none;border-top:1px solid var(--border);">${totValor ? "100,00%" : "—"}</td>
    </tr></tfoot></table>`;
}
// Uma barra empilhada por Sub-Regional (segmento = Status SVP). Ordenado por
// quem tem mais NF "Aguardando validação"; as duas colunas da direita dão
// esse número e o total. Clicar numa linha filtra a aba por essa
// Sub-Regional (clicar de novo tira o filtro).
function renderNfEmChart(){
  const el = document.getElementById("nf-em-chart");
  const leg = document.getElementById("nf-em-legenda");
  if(!el) return;
  if(!NF_EMISSOES_OK){ el.innerHTML = nfEmAviso(); if(leg) leg.innerHTML = ""; return; }
  const status = nfEmStatusLista();
  // de propósito sem o filtro de Sub-Regional: a escolhida fica destacada e
  // as outras continuam visíveis pra comparar
  const rows = nfEmFilteredExcept("subregional");
  const m = {};
  rows.forEach(e=>{
    const k = e.subRegional || "(vazio)";
    const o = m[k] || (m[k] = {label:k, total:0, por:{}});
    o.total += e.qtd; o.por[e.statusSvp] = (o.por[e.statusSvp]||0) + e.qtd;
  });
  const chaveAguard = (status.find(s=>nfEmKey(s.nome)==="aguardando validacao") || {}).nome;
  const grupos = Object.values(m).filter(g=>g.total>0)
    .sort((a,b)=> (chaveAguard ? ((b.por[chaveAguard]||0)-(a.por[chaveAguard]||0)) : 0) || b.total-a.total || a.label.localeCompare(b.label));
  const usados = status.filter(s=> grupos.some(g=>g.por[s.nome]>0));
  if(leg){
    leg.innerHTML = usados.map(s=>{
      const q = grupos.reduce((t,g)=>t+(g.por[s.nome]||0),0);
      return `<span style="display:inline-flex;align-items:center;gap:6px;font-size:12px;color:var(--text-secondary);">
        <span style="width:10px;height:10px;border-radius:2px;background:${s.cor};"></span>${esc(s.nome)} <b style="color:var(--text-primary);font-variant-numeric:tabular-nums;">${nfInt(q)}</b></span>`;
    }).join("");
  }
  if(!grupos.length){ el.innerHTML = '<div class="empty-state">Nenhuma emissão para os filtros atuais.</div>'; return; }
  const max = Math.max(...grupos.map(g=>g.total), 1);
  const sel = nfFilters.subregional;
  const cols = "display:grid;grid-template-columns:minmax(64px,110px) minmax(0,1fr)" + (chaveAguard ? " 58px" : "") + " 52px;align-items:center;gap:10px;";
  const numCss = "text-align:right;font-variant-numeric:tabular-nums;white-space:nowrap;";
  const head = `<div class="col-head" style="${cols}padding:2px 8px 8px 6px;">
      <span>Sub-Regional</span><span></span>${chaveAguard ? `<span style="${numCss}">Aguard.</span>` : ""}<span style="${numCss}">Total</span>
    </div>`;
  const linhas = grupos.map((g,i)=>{
    const segs = usados.filter(s=>g.por[s.nome]>0);
    const barras = segs.map((s,j)=>`<div style="flex:${g.por[s.nome]} 1 0;min-width:2px;background:${s.cor};${j===segs.length-1 ? "border-radius:0 4px 4px 0;" : ""}"></div>`).join("");
    const ehSel = g.label===sel;
    return `<div class="nf-em-row" data-i="${i}" style="${cols}padding:5px 8px 5px 6px;border-radius:6px;cursor:pointer;font-size:12.5px;${ehSel ? "background:var(--brand-bg);" : ""}${sel && !ehSel ? "opacity:.45;" : ""}">
      <div style="overflow:hidden;text-overflow:ellipsis;white-space:nowrap;color:${ehSel ? "var(--text-primary)" : "var(--text-secondary)"};${ehSel ? "font-weight:700;" : ""}" title="${esc(g.label)}">${esc(g.label)}</div>
      <div style="height:14px;"><div style="display:flex;gap:2px;height:100%;width:${(g.total/max*100).toFixed(2)}%;min-width:3px;">${barras}</div></div>
      ${chaveAguard ? `<div style="${numCss}font-weight:700;color:var(--text-primary);">${nfInt(g.por[chaveAguard]||0)}</div>` : ""}
      <div style="${numCss}color:var(--text-secondary);">${nfInt(g.total)}</div>
    </div>`;
  }).join("");
  el.innerHTML = head + `<div class="hist-rank-rows-scroll">${linhas}</div>`;
  el.querySelectorAll(".nf-em-row").forEach(row=>{
    const g = grupos[+row.dataset.i];
    const tip = `<div class="t">${esc(g.label)}</div>` + usados.filter(s=>g.por[s.nome]>0).map(s=>
      `<div class="r"><span><span style="display:inline-block;width:8px;height:8px;border-radius:2px;background:${s.cor};margin-right:6px;"></span>${esc(s.nome)}</span><b>${nfInt(g.por[s.nome])} · ${nfPct2(g.por[s.nome], g.total)}</b></div>`).join("") +
      `<div class="r" style="margin-top:4px;border-top:1px solid var(--border);padding-top:4px">Total de NFs <b>${nfInt(g.total)}</b></div>`;
    row.addEventListener("mousemove", ev=> sdTip(tip, ev));
    row.addEventListener("mouseleave", ()=> sdTip(null));
    row.addEventListener("click", ()=>{
      sdTip(null);
      nfFilters.subregional = (nfFilters.subregional===g.label) ? "" : g.label;
      populateNfFilters();
      const s = document.getElementById("nf-f-subregional"); if(s) s.value = nfFilters.subregional;
      renderNotasFiscais();
    });
  });
}
function renderNotasFiscais(){
  renderNfEmResumo();
  renderNfEmChart();
  const rows = nfFiltered();
  const totais = nfTotaisFiltered();
  const totalDops = totais.reduce((s,t)=>s+t.total, 0);
  const badge = document.getElementById("nav-nf-badge");
  if(badge) badge.textContent = rows.length;
  renderKpis("nf-kpi-grid", [
    {label:"Total Pendentes", value: rows.length, icon:"📄", cls: rows.length>0?"warn":"",
      sub: totalDops ? ("de " + totalDops + " DOPs · " + nfPct(rows.length, totalDops) + " pendente") : ""},
    {label:"Analistas com Pendência", value: nfUniq(rows,"analista").length, icon:"🧑‍💼"}
  ]);
  nfRenderRankList("nf-rank-regional", nfGroupCount(rows,"regional"));
  nfRenderRankList("nf-rank-subregional", nfGroupCount(rows,"subRegional"));
  if(NF_TOTAIS.length) nfRenderAnalistaList("nf-rank-analista", totais);
  else nfRenderRankList("nf-rank-analista", nfGroupCount(rows,"analista"));
  const el = document.getElementById("nf-table");
  if(el){
    if(!rows.length){
      el.innerHTML = '<tbody><tr><td class="empty-state">Nenhum DOP pendente para os filtros atuais.</td></tr></tbody>';
    } else {
      const thead = "<thead><tr><th>Mês</th><th>DOP</th><th>Empresa</th><th>Sub-Regional</th><th>Regional</th><th>Analista</th></tr></thead>";
      const tbody = "<tbody>" + rows.map(d=>`<tr><td>${d.mes||"—"}</td><td class="dop-strong">${d.dop}</td><td>${d.empresa||"—"}</td><td>${d.subRegional||"—"}</td><td>${d.regional||"—"}</td><td>${d.analista||"—"}</td></tr>`).join("") + "</tbody>";
      el.innerHTML = thead + tbody;
    }
  }
}
const nfRefreshBtn = document.getElementById("nf-refresh");
if(nfRefreshBtn) nfRefreshBtn.addEventListener("click", ()=> loadNotasFiscais());
function filtered(){
  return DATA.filter(d =>
    (!filters.resp.length || filters.resp.includes(d.resp)) &&
    (!filters.subreg.length || filters.subreg.includes(d.subreg)) &&
    (!filters.cidade.length || filters.cidade.includes(d.cidade)) &&
    (!filters.estacao.length || filters.estacao.includes(d.estacao)) &&
    (!filters.statuscoleta.length || filters.statuscoleta.includes(d.statusColeta)) &&
    (!filters.risco.length || filters.risco.includes(d.risco))
  );
}
function alertIndicador(d){
  if(d.statusColeta && d.statusColeta.toUpperCase().includes("3+")) return {label:"Sem coleta", valor:"3+ dias"};
  if(d.horasSemColeta >= 20) return {label:"Sem coleta", valor: d.horasSemColeta.toFixed(0)+"h"};
  if(d.pctAtrasados >= 15) return {label:"% Atrasados", valor: d.pctAtrasados.toFixed(1)+"%"};
  if(d.backlogEnvelhecido > 0) return {label:"Backlog envelhecido", valor: String(d.backlogEnvelhecido)};
  if(d.backlogOps > 300) return {label:"Backlog Total", valor: d.backlogOps.toLocaleString("pt-BR")};
  return {label:"Risco Operacional", valor: d.risco};
}
// Cards principais — mesmo conjunto do painel de agências (backlog, coleta,
// FIFO/Same Day médios, volumes).
// ==================== BACKLOG AO VIVO (3 frentes) ====================
// Card "Backlog Total" do Resumo: soma Forward + RR + BSC Failed direto da
// planilha "Gestão da Rotina | PUDO" (?tipo=backlogresumo, BacklogResumo.gs).
// Mostra o que está nas agências AGORA, inclusive o que chegou hoje (D_0).
// O "BACKLOG TOTAL (OPS)" da BASE_TRATADA (backlog do fim do último dia)
// continua sendo usado nos alertas, no risco e nas tabelas por agência.
let BR_ROWS = null;   // [{frente, dop, agencia, resp, subreg, estacao, cidade, total, d0, d1}]
let BR_INFO = null;   // { atualizadoEm, frentes, frentesFaltando }
let BR_ERRO = false;  // true se a busca ao vivo falhou (aí o card mostra o número do fim do dia)
async function loadBacklogResumo(){
  try{
    const sep = API_URL.indexOf("?") >= 0 ? "&" : "?";
    const json = await fetchViaIframe(API_URL + sep + "tipo=backlogresumo", 90000);
    if(!json || !json.cols || !json.rows) throw new Error("resposta sem dados — confira se o BacklogResumo.gs foi publicado");
    BR_ROWS = json.rows.map(r=>{ const o={}; json.cols.forEach((c,i)=>o[c]=r[i]); return o; });
    BR_ERRO = false;
    BR_INFO = { atualizadoEm: json.atualizadoEm, frentes: json.frentes || [], frentesFaltando: json.frentesFaltando || [] };
    if(DATA.length) renderAll();
  } catch(err){
    console.error("Backlog ao vivo:", err);
    BR_ERRO = true;
    if(DATA.length) renderAll();
  }
}
// Soma o backlog ao vivo respeitando os filtros do topo. Sem filtro de
// sub-regional, vale o escopo do painel (as sub-regionais da BASE_TRATADA).
function backlogAoVivo(rows){
  if(!BR_ROWS || HIST_DIA) return null;
  const N = v => String(v==null?"":v).trim().toUpperCase();
  const conj = lista => new Set(lista.map(N));
  let subs = filters.subreg.length ? conj(filters.subreg) : conj(uniq("subreg"));
  subs.delete("NÃO INFORMADO"); subs.delete("");
  const resp = filters.resp.length ? conj(filters.resp) : null;
  const est = filters.estacao.length ? conj(filters.estacao) : null;
  const cid = filters.cidade.length ? conj(filters.cidade) : null;
  // Status de coleta e Risco só existem na BASE_TRATADA: nesses casos, vale a lista de DOPs filtrada
  const dops = (filters.statuscoleta.length || filters.risco.length) ? new Set(rows.map(d=>dopKey(d.dop))) : null;
  const r = { total:0, d0:0, d1:0, porFrente:{}, dops:new Set() };
  BR_ROWS.forEach(b=>{
    if(subs.size && !subs.has(N(b.subreg))) return;
    if(resp && !resp.has(N(b.resp))) return;
    if(est && !est.has(N(b.estacao))) return;
    if(cid && !cid.has(N(b.cidade))) return;
    if(dops && !dops.has(dopKey(b.dop))) return;
    r.total += b.total||0; r.d0 += b.d0||0; r.d1 += b.d1||0;
    r.porFrente[b.frente] = (r.porFrente[b.frente]||0) + (b.total||0);
    r.dops.add(dopKey(b.dop));
  });
  return r;
}
function kpiCardBacklog(rows){
  const vivo = backlogAoVivo(rows);
  if(!vivo){
    // ainda carregando (ou BacklogResumo.gs não publicado): mostra o número antigo da BASE_TRATADA
    const antigo = rows.reduce((s,d)=>s+d.backlogOps,0);
    return {label:"Backlog Total (OPS)", value: antigo.toLocaleString("pt-BR"), icon:"📦",
      sub: HIST_DIA ? "como estava na base salva desse dia" : (BR_ERRO ? "fim do último dia · total ao vivo indisponível" : "fim do último dia · carregando o total ao vivo…")};
  }
  const n = v => Math.round(v||0).toLocaleString("pt-BR");
  const frentes = (BR_INFO.frentes.length ? BR_INFO.frentes : Object.keys(vivo.porFrente))
    .map(f=> esc(f) + " <b>" + n(vivo.porFrente[f]) + "</b>").join(" · ");
  const hora = BR_INFO.atualizadoEm ? new Date(BR_INFO.atualizadoEm).toLocaleTimeString("pt-BR",{hour:"2-digit",minute:"2-digit"}) : "";
  const falta = BR_INFO.frentesFaltando.length ? "<br>⚠ não lida: " + esc(BR_INFO.frentesFaltando.join("; ")) : "";
  return {label:"Backlog Total (" + (BR_INFO.frentes.length || 3) + " frentes)", value: n(vivo.total), icon:"📦",
    sub: frentes + "<br>hoje (D0) <b>" + n(vivo.d0) + "</b> · dias anteriores <b>" + n(vivo.d1) + "</b>"
      + "<br>" + n(vivo.dops.size) + (vivo.dops.size===1 ? " DOP" : " DOPs") + (hora ? " · lido às " + hora : "") + falta,
    title: "Backlog que está nas agências agora, somando as frentes (planilha Gestão da Rotina | PUDO)."};
}
function kpiCardsPrimary(rows){
  const semColetaHoje = rows.filter(d=>!d.statusColeta.toUpperCase().includes("COLETOU")).length;
  // (os cards "% FIFO Médio (semana)" e "% Same Day (semana)" foram
  // retirados do Resumo Geral a pedido — ficam só os do dia)
  // "Hoje" usa os mesmos flags do dia (FIFO HOJE / SAME DAY) já usados no
  // Detalhe da Agência — aqui só agregamos a média entre as agências.
  const fifoHojeMedio = rows.length? rows.reduce((s,d)=>s+d.fifoHojeFlag,0)/rows.length : 0;
  const sdHojeMedio = SD_MAP ? sameDayPonderado(rows,"dia")
    : (rows.length? rows.reduce((s,d)=>s+d.sameDayFlag,0)/rows.length : 0);
  const sdLabelDia = SD_MAP && SD_INFO && SD_INFO.refDia ? "% Same Day ("+fmtDiaBR(SD_INFO.refDia)+")" : "% Same Day Médio (hoje)";
  const volOutbound = rows.reduce((s,d)=>s+d.outbound,0);
  const volInbound = rows.reduce((s,d)=>s+d.inbound,0);
  return [
    kpiCardBacklog(rows),
    {label: HIST_DIA ? "Dops Sem Coleta ("+fmtDiaBR(HIST_DIA)+")" : "Dops Sem Coleta Hoje", value: semColetaHoje, icon:"🚚", cls: semColetaHoje>0?"warn":""},
    {label: HIST_DIA ? "% FIFO Médio ("+fmtDiaBR(HIST_DIA)+")" : "% FIFO Médio (hoje)", value: pct0(fifoHojeMedio), icon:"📅"},
    {label: sdLabelDia, value: SD_MAP ? pct1(sdHojeMedio) : pct0(sdHojeMedio), icon:"📅"},
    {label:"Volume Outbound", value: volOutbound.toLocaleString("pt-BR"), icon:"⬆"},
    {label:"Volume Inbound", value: volInbound.toLocaleString("pt-BR"), icon:"⬇"},
  ].concat(SD_MAP && SD_INFO && SD_INFO.refDia ? (()=>{
    // Pacotes que chegaram no DOP depois da última coleta do dia (ficam pro dia seguinte)
    const pos = rows.reduce((s,d)=>s+(d.sdPosColDia||0),0);
    const inb = rows.reduce((s,d)=>s+(d.sdInbDia||0),0);
    const dops = rows.filter(d=>(d.sdPosColDia||0)>0).length;
    return [{label:"Recebidos pós-coleta ("+fmtDiaBR(SD_INFO.refDia)+")", value: pos.toLocaleString("pt-BR"), icon:"📥",
      cls: pos>0?"warn":"", sub: (inb? (pos/inb*100).toFixed(1).replace(".",",")+"% do inbound · " : "") + dops + " DOPs" + (dops ? " · ver por DOP ↓" : ""),
      goto: "card-poscoleta"}];
  })() : []);
}
// Cards extras — indicadores próprios deste painel operacional (risco,
// atrasados), que não existem no painel de agências.
function kpiCardsSecondary(rows){
  const criticos = rows.filter(d=>riskClass(d.risco)==="critical").length;
  const atrasadosMedio = rows.length? rows.reduce((s,d)=>s+d.pctAtrasados,0)/rows.length : 0;
  const perdasQtdTotal = rows.reduce((s,d)=>s+d.perdasQtd,0);
  const perdasValorTotal = rows.reduce((s,d)=>s+d.perdasValor,0);
  return [
    {label:"Agências em Risco Crítico", value: criticos, icon:"🔴", cls: criticos>0?"crit":""},
    {label:"% Atrasados Médio", value: atrasadosMedio.toFixed(1)+"%", icon:"⏱"},
    {label:"Pacotes Perdidos (Total)", value: perdasQtdTotal.toLocaleString("pt-BR"), icon:"📉", cls: perdasQtdTotal>0?"warn":""},
    {label:"Valor Perdido (R$)", value: perdasValorTotal.toLocaleString("pt-BR",{style:"currency",currency:"BRL"}), icon:"💸", cls: perdasValorTotal>0?"crit":""},
  ];
}
function renderKpis(targetId, cards){
  const el = document.getElementById(targetId);
  el.innerHTML = "";
  cards.forEach(k=>{
    const div = document.createElement("div");
    div.className = "kpi"+(k.cls?" "+k.cls:"");
    div.innerHTML = `<div class="kpi-label">${k.icon} ${k.label}</div><div class="kpi-value">${k.value}</div>` + (k.sub ? `<div class="kpi-delta">${k.sub}</div>` : "");
    if(k.title) div.title = k.title;
    if(k.goto){
      div.style.cursor = "pointer";
      div.title = "Clique para ver por DOP";
      div.onclick = ()=>{ const alvo = document.getElementById(k.goto); if(alvo) alvo.scrollIntoView({behavior:"smooth", block:"start"}); };
    }
    el.appendChild(div);
  });
}
const ALERTS_PREVIEW_COUNT = 8;
function renderAlerts(rows){
  const el = document.getElementById("alerts-list");
  const allAlerts = rows.filter(d=> riskClass(d.risco)==="critical" || d.status.toUpperCase().includes("CRÍT"))
    .sort((a,b)=>b.horasSemColeta-a.horasSemColeta);
  const hasMore = allAlerts.length > ALERTS_PREVIEW_COUNT;
  const alerts = expandState.alerts ? allAlerts : allAlerts.slice(0, ALERTS_PREVIEW_COUNT);
  el.innerHTML = "";
  if(!alerts.length){ el.innerHTML = '<div class="empty-state">Nenhum alerta crítico no momento.</div>'; }
  alerts.forEach(d=>{
    const ind = alertIndicador(d);
    const row = document.createElement("div");
    row.className = "alert-row";
    row.style.gridTemplateColumns = "3px 1.3fr 0.55fr 0.95fr 0.7fr";
    row.innerHTML = `<div class="alert-bar" style="background:var(--critical)"></div>
      <div><div class="alert-name">${d.agencia}</div><div class="alert-sub">${d.cidade}</div></div>
      <div>${d.dop}</div>
      <div>${ind.label}</div>
      <div>${ind.valor}</div>`;
    row.onclick = ()=> openDetail(d.dop);
    el.appendChild(row);
  });
  const top = document.getElementById("alerts-toggle-top");
  const bottom = document.getElementById("alerts-toggle-bottom");
  const showToggle = hasMore || expandState.alerts;
  if(top) top.style.display = showToggle ? "" : "none";
  if(bottom) bottom.style.display = showToggle ? "" : "none";
  if(top) top.textContent = expandState.alerts ? "Fechar ✕" : "Ver todas";
  if(bottom){
    bottom.textContent = expandState.alerts ? "− Fechar" : "+ Ver todas as alertas";
    bottom.classList.toggle("is-open", expandState.alerts);
  }
}
function donut(svgId, legendId, groups, colorFn){
  const svg = document.getElementById(svgId);
  const legend = document.getElementById(legendId);
  if(!svg || !legend) return;
  const total = groups.reduce((s,g)=>s+g.value,0) || 1;
  const cx=75, cy=75, r=58, rInner=34;
  let angle = -90;
  let paths = "";
  groups.forEach(g=>{
    const frac = g.value/total;
    const sweep = frac*360;
    const a0 = angle, a1 = angle+sweep;
    const large = sweep>180?1:0;
    const p0 = polar(cx,cy,r,a0), p1 = polar(cx,cy,r,a1);
    const p0i = polar(cx,cy,rInner,a0), p1i = polar(cx,cy,rInner,a1);
    paths += `<path d="M ${p0.x} ${p0.y} A ${r} ${r} 0 ${large} 1 ${p1.x} ${p1.y} L ${p1i.x} ${p1i.y} A ${rInner} ${rInner} 0 ${large} 0 ${p0i.x} ${p0i.y} Z" fill="${g.color}" stroke="var(--surface-2)" stroke-width="2"/>`;
    angle = a1;
  });
  svg.innerHTML = paths + `<text x="75" y="70" text-anchor="middle" font-size="20" font-weight="700" fill="var(--text-primary)">${total}</text><text x="75" y="86" text-anchor="middle" font-size="10" fill="var(--text-muted)">agências</text>`;
  legend.innerHTML = groups.map(g=>`<div class="legend-item"><span class="legend-swatch" style="background:${g.color}"></span>${g.label}<span class="legend-val">${g.value} (${((g.value/total)*100).toFixed(0)}%)</span></div>`).join("");
}
function polar(cx,cy,r,angleDeg){ const a=(angleDeg*Math.PI)/180; return {x:cx+r*Math.cos(a), y:cy+r*Math.sin(a)}; }
function groupCount(rows, field, mapClassColor){
  const m = {};
  rows.forEach(d=>{ const k=d[field]||"—"; m[k]=(m[k]||0)+1; });
  return Object.entries(m).map(([label,value])=>({label, value, color: mapClassColor(label)}))
    .sort((a,b)=>b.value-a.value);
}
function fifoBadgeClass(v){ return v>=0.95?"good":v>=0.85?"warning":"critical"; }
const RESUMO_PREVIEW_COUNT = 5;
function renderResumoToggle(topId, bottomId, stateKey, defaultLabel, hasMore){
  const top = document.getElementById(topId);
  const bottom = document.getElementById(bottomId);
  const isOpen = expandState[stateKey];
  const showToggle = hasMore || isOpen;
  if(top){ top.style.display = showToggle ? "" : "none"; top.textContent = isOpen ? "Fechar ✕" : defaultLabel; }
  if(bottom){
    bottom.style.display = showToggle ? "" : "none";
    bottom.textContent = isOpen ? "− Fechar" : "+ "+defaultLabel;
    bottom.classList.toggle("is-open", isOpen);
  }
}
// Semana de referência = a semana da linha mais recente da base (coluna DATA).
function semanaAtualDaBase(){
  let melhor = null, sem = null;
  DATA.forEach(d=>{
    if(!d.data || d.semana==="" || d.semana==null) return;
    const t = new Date(d.data).getTime();
    if(isNaN(t)) return;
    if(melhor===null || t > melhor){ melhor = t; sem = d.semana; }
  });
  return sem;
}
function renderRankLists(rows){
  // Tudo fica no Resumo Geral (a aba "Rankings" foi removida): preview curto
  // e o "Ver ranking completo" abre a lista inteira.
  const setHtml = (id, html)=>{ const el = document.getElementById(id); if(el) el.innerHTML = html; };
  // FIFO — só entram agências com leitura válida de FIFO na semana atual.
  // Quem não teve pacote elegível ("sem dados") ou cujo último registro é de
  // uma semana anterior fica de fora: não é 0%, é ausência de dado.
  const semAtual = semanaAtualDaBase();
  const fifoComDado = rows.filter(d=> d.fifoSemana!=null && (semAtual==null || String(d.semana)===String(semAtual)));
  const byFifoAll = [...fifoComDado].sort((a,b)=>a.fifoSemana-b.fifoSemana);
  const fifoTit = document.getElementById("fifo-rank-titulo");
  if(fifoTit) fifoTit.textContent = "📉 Ranking — Pior % FIFO (semana" + (semAtual!=null ? " " + semAtual : "") + ")";
  const fifoNota = document.getElementById("fifo-rank-nota");
  if(fifoNota){
    const fora = rows.length - fifoComDado.length;
    fifoNota.textContent = fora > 0 ? fora + (fora===1 ? " agência sem dados de FIFO na semana não entra" : " agências sem dados de FIFO na semana não entram") + " no ranking." : "";
    fifoNota.style.display = fora > 0 ? "" : "none";
  }
  const fifoPreview = expandState.fifoResumo ? byFifoAll : byFifoAll.slice(0, RESUMO_PREVIEW_COUNT);
  setHtml("rank-fifo-resumo", fifoPreview.map((d,i)=>rankRow(i,d,pct0(d.fifoSemana), fifoBadgeClass(d.fifoSemana))).join("") || emptyRow());
  renderResumoToggle("fifo-resumo-toggle-top","fifo-resumo-toggle-bottom","fifoResumo","Ver ranking completo", byFifoAll.length>RESUMO_PREVIEW_COUNT);
  // Same Day: ranqueia pelos pacotes que ficaram FORA do Same Day na semana
  // (é o que mais derruba o % da sub-regional). Ordenar só pelo % deixava no
  // topo DOP com 3 pacotes e 0%, que quase não pesa no resultado.
  const sdBase = SD_MAP ? rows.filter(d=>d.temSameDay) : rows;
  const foraSD = d => SD_MAP ? (d.sdOutSem||0) - (d.sdSdSem||0) : -d.sameDaySemana;
  const bySameDayAll = [...sdBase].sort((a,b)=>foraSD(b)-foraSD(a));
  const sdExtra = d => SD_MAP ? foraSD(d).toLocaleString("pt-BR")+" fora do SD" : null;
  const sdPreview = expandState.sdResumo ? bySameDayAll : bySameDayAll.slice(0, RESUMO_PREVIEW_COUNT);
  setHtml("rank-sameday-resumo", sdPreview.map((d,i)=>rankRow(i,d,pct1(d.sameDaySemana), fifoBadgeClass(d.sameDaySemana), sdExtra(d))).join("") || emptyRow());
  renderResumoToggle("sameday-resumo-toggle-top","sameday-resumo-toggle-bottom","sdResumo","Ver ranking completo", bySameDayAll.length>RESUMO_PREVIEW_COUNT);
  // Losses — ranqueia pela QUANTIDADE de pacotes perdidos (empate: maior valor); só agências com perda.
  const byLossesAll = rows.filter(d=>d.perdasQtd>0 || d.perdasValor>0).sort((a,b)=>(b.perdasQtd-a.perdasQtd) || (b.perdasValor-a.perdasValor));
  const byLosses = expandState.losses ? byLossesAll : byLossesAll.slice(0, 8);
  // Total de Losses do filtro atual (Estação, Sub-Regional, Responsável...). Sem filtro = total geral.
  const lossesTotalEl = document.getElementById("losses-total");
  if(lossesTotalEl){
    const qtdTot = rows.reduce((s,d)=>s+d.perdasQtd,0);
    const valTot = rows.reduce((s,d)=>s+d.perdasValor,0);
    const escopoLista = [filters.estacao, filters.subreg, filters.resp, filters.cidade].find(l=>l.length);
    const escopo = !escopoLista ? "Total geral" : (escopoLista.length===1 ? escopoLista[0] : escopoLista.length + " selecionados");
    lossesTotalEl.innerHTML = `${esc(escopo)}: <b>${qtdTot.toLocaleString("pt-BR")}</b> ${qtdTot===1?"pacote":"pacotes"}`
      + `<span class="sep">·</span><b>${valTot.toLocaleString("pt-BR",{style:"currency",currency:"BRL"})}</b>`
      + `<span class="sep">·</span>${byLossesAll.length} ${byLossesAll.length===1?"DOP":"DOPs"}`;
  }
  setHtml("rank-losses", byLosses.map((d,i)=>rankRow(
    i, d,
    d.perdasQtd.toLocaleString("pt-BR") + (d.perdasQtd===1?" pacote":" pacotes"),
    d.perdasQtd>=10?"critical":d.perdasQtd>0?"warning":"good",
    d.perdasValor.toLocaleString("pt-BR",{style:"currency",currency:"BRL"})
  )).join("") || emptyRow());
  // Recebidos pós-coleta por DOP (último dia fechado da base de Same Day)
  const posAll = rows.filter(d=>(d.sdPosColDia||0)>0).sort((a,b)=>b.sdPosColDia-a.sdPosColDia);
  const posVis = expandState.posColeta ? posAll : posAll.slice(0, 8);
  const posTotEl = document.getElementById("poscoleta-total");
  if(posTotEl){
    const tot = posAll.reduce((s,d)=>s+d.sdPosColDia,0);
    posTotEl.innerHTML = SD_MAP && SD_INFO && SD_INFO.refDia
      ? `${fmtDiaBR(SD_INFO.refDia)}: <b>${tot.toLocaleString("pt-BR")}</b> pacotes<span class="sep">·</span>${posAll.length} DOPs`
      : "carregando…";
  }
  setHtml("rank-poscoleta", posVis.map((d,i)=>{
    const pctInb = d.sdInbDia ? (d.sdPosColDia/d.sdInbDia*100).toFixed(0)+"% do inbound" : "";
    return rankRow(i, d, d.sdPosColDia.toLocaleString("pt-BR") + (d.sdPosColDia===1?" pacote":" pacotes"),
      d.sdPosColDia>=100?"critical":"warning", pctInb);
  }).join("") || (SD_MAP ? '<div class="empty-state">Nenhum pacote recebido depois da coleta.</div>' : emptyRow()));
  const posBtn = document.getElementById("poscoleta-toggle-bottom");
  if(posBtn){
    posBtn.style.display = (posAll.length > 8 || expandState.posColeta) ? "" : "none";
    posBtn.textContent = expandState.posColeta ? "− Mostrar só os 8 maiores" : "+ Ver todos os " + posAll.length + " DOPs";
    posBtn.classList.toggle("is-open", !!expandState.posColeta);
  }
  const lossesBtn = document.getElementById("losses-toggle-bottom");
  if(lossesBtn){
    lossesBtn.style.display = (byLossesAll.length > 8 || expandState.losses) ? "" : "none";
    lossesBtn.textContent = expandState.losses ? "− Mostrar só as 8 maiores" : "+ Ver todas as " + byLossesAll.length + " agências com perdas";
    lossesBtn.classList.toggle("is-open", !!expandState.losses);
  }
}
// Tabela "Dops sem coleta há mais tempo" — mesma lógica do painel de agências.
const SEM_COLETA_COLS = [
  {k:"agencia", l:"Agência"}, {k:"dop", l:"DOP"},
  {k:"ultimaColetaFmt", l:"Última Coleta"}, {k:"agingSemColeta", l:"Dias Sem Coleta"},
  {k:"horasSemColeta", l:"Horas Sem Coleta"}, {k:"backlogOps", l:"Backlog"}
];
function renderSemColetaTable(rows){
  // Junta o antigo "Mais horas sem coleta" (aba Rankings) com esta tabela:
  // ordena por dias sem coleta e, no empate, por horas.
  const allAging = rows.filter(d=>d.agingSemColeta > 0 || d.horasSemColeta >= 24)
    .sort((a,b)=>(b.agingSemColeta-a.agingSemColeta) || (b.horasSemColeta-a.horasSemColeta));
  const withAging = (expandState.semColeta ? allAging : allAging.slice(0,8))
    .map(d=> Object.assign({}, d, { ultimaColetaFmt: fmtDate(d.ultimaColeta) }));
  const totEl = document.getElementById("semcoleta-total");
  if(totEl) totEl.innerHTML = allAging.length ? `<b>${allAging.length}</b> ${allAging.length===1?"DOP":"DOPs"} sem coleta` : "";
  const scBtn = document.getElementById("semcoleta-toggle-bottom");
  if(scBtn){
    scBtn.style.display = (allAging.length > 8 || expandState.semColeta) ? "" : "none";
    scBtn.textContent = expandState.semColeta ? "− Mostrar só os 8 primeiros" : "+ Ver todos os " + allAging.length + " DOPs sem coleta";
    scBtn.classList.toggle("is-open", !!expandState.semColeta);
  }
  const el = document.getElementById("table-sem-coleta");
  if(!el) return;
  // NUNCA usar el.parentElement.innerHTML aqui — isso apaga o próprio elemento
  // #table-sem-coleta do DOM (ele é filho do parentElement substituído), e na
  // próxima vez que essa função rodar (auto-refresh, filtro mudando etc.)
  // document.getElementById volta null e quebra a atualização inteira do
  // painel silenciosamente. E como #table-sem-coleta é um <table>, um <div>
  // solto como innerHTML dele é HTML inválido (o navegador "foster-parenta"
  // pra fora da tabela) — por isso a mensagem vai numa <td>, não numa <div>.
  if(!withAging.length){
    el.innerHTML = '<tbody><tr><td colspan="' + SEM_COLETA_COLS.length + '" class="empty-state">Todas as agências coletaram hoje.</td></tr></tbody>';
    return;
  }
  const thead = "<thead><tr>"+SEM_COLETA_COLS.map(c=>`<th>${c.l}</th>`).join("")+"</tr></thead>";
  const tbody = "<tbody>"+withAging.map(d=>{
    return "<tr onclick=\"openDetail("+JSON.stringify(d.dop)+")\">"+SEM_COLETA_COLS.map(c=>{
      let v = d[c.k];
      if(c.k==="dop") return `<td class="dop-strong">${v}</td>`;
      if(c.k==="agingSemColeta") return `<td><span class="badge ${v>=3?'critical':v>=2?'warning':'warning'}"><span class="ic"></span>${v} dia(s)</span></td>`;
      if(c.k==="horasSemColeta") return `<td>${(v||0).toFixed(0)}h</td>`;
      if(typeof v==="number") v = v.toLocaleString("pt-BR",{maximumFractionDigits:1});
      return `<td>${v}</td>`;
    }).join("")+"</tr>";
  }).join("")+"</tbody>";
  el.innerHTML = thead+tbody;
}
function emptyRow(){ return '<div class="empty-state">Sem dados para os filtros atuais.</div>'; }
function rankRow(i,d,val,cls,extra){
  const cols = extra!=null ? "18px 1.6fr 0.75fr 0.9fr" : "18px 1.6fr 0.9fr";
  const extraCol = extra!=null ? `<div style="text-align:right;color:var(--text-muted);font-size:11.5px">${extra}</div>` : "";
  return `<div class="alert-row" style="grid-template-columns:${cols};cursor:pointer" onclick="openDetail(${JSON.stringify(d.dop)})">
    <div class="rank-num">${i+1}</div>
    <div><div class="alert-name">${d.agencia}</div><div class="alert-sub">DOP ${d.dop} · ${d.cidade}</div></div>
    ${extraCol}
    <div style="text-align:right"><span class="badge ${cls}"><span class="ic"></span>${val}</span></div>
  </div>`;
}
const TABLE_COLS = [
  {k:"dop", l:"DOP"}, {k:"agencia", l:"Agência"}, {k:"cidade", l:"Cidade"}, {k:"resp", l:"Responsável"},
  {k:"backlogOps", l:"Backlog"},
  {k:"fifoSemana", l:"% FIFO Semana", fmt:pctFifo}, {k:"fifoHojeFlag", l:"% FIFO Hoje", fmt:pct0},
  {k:"sameDaySemana", l:"% Same Day Semana", fmt:pct0}, {k:"sameDayFlag", l:"% Same Day Hoje", fmt:pct0},
  {k:"perdasQtd", l:"Pacotes Perdidos"}, {k:"risco", l:"Risco", badge:riskClass}, {k:"statusColeta", l:"Coleta", badge:coletaClass}, {k:"status", l:"Status", badge:riskClass}
];
let sortState = { key:"backlogOps", dir:-1 };
function renderTable(targetId, rows, cols, sortKeyState){
  const el = document.getElementById(targetId);
  const st = sortKeyState;
  const sorted = [...rows].sort((a,b)=>{
    let va=a[st.key], vb=b[st.key];
    if(typeof va === "string") return va.localeCompare(vb)*st.dir;
    return (va-vb)*st.dir;
  });
  const thead = "<thead><tr>"+cols.map(c=>`<th data-key="${c.k}">${c.l} ${st.key===c.k?(st.dir===1?'<span class="sort-ind">▲</span>':'<span class="sort-ind">▼</span>'):''}</th>`).join("")+"</tr></thead>";
  const tbody = "<tbody>"+sorted.map(d=>{
    return "<tr onclick=\"openDetail("+JSON.stringify(d.dop)+")\">"+cols.map(c=>{
      let v = d[c.k];
      if(c.fmt) v = c.fmt(v);
      if(c.badge){ const cls=c.badge(v); return `<td><span class="badge ${cls}"><span class="ic"></span>${v}</span></td>`; }
      if(c.k==="dop") return `<td class="dop-strong">${v}</td>`;
      if(typeof v==="number") v = v.toLocaleString("pt-BR",{maximumFractionDigits:1});
      return `<td>${v}</td>`;
    }).join("")+"</tr>";
  }).join("")+"</tbody>";
  el.innerHTML = thead+tbody;
  el.querySelectorAll("th").forEach(th=>{
    th.onclick = ()=>{
      const k = th.dataset.key;
      if(st.key===k) st.dir*=-1; else { st.key=k; st.dir=1; }
      renderTable(targetId, rows, cols, st);
    };
  });
}
const BASE_COLS = [
  {k:"dop", l:"DOP"}, {k:"agencia", l:"Agência"}, {k:"resp", l:"Responsável"}, {k:"cidade", l:"Cidade"}, {k:"estado", l:"Estado"},
  {k:"subreg", l:"Sub-Regional"}, {k:"estacao", l:"Estação"}, {k:"backlog", l:"Backlog"}, {k:"backlogOps", l:"Backlog OPS"},
  {k:"inbound", l:"Inbound"}, {k:"outbound", l:"Outbound"},
  {k:"fifoSemana", l:"% FIFO Semana", fmt:pctFifo}, {k:"fifoHojeFlag", l:"% FIFO Hoje", fmt:pct0},
  {k:"sameDaySemana", l:"% Same Day Semana", fmt:pct0}, {k:"sameDayFlag", l:"% Same Day Hoje", fmt:pct0},
  {k:"pctAtrasados", l:"% Atrasados"}, {k:"horasSemColeta", l:"Hs sem coleta"}, {k:"risco", l:"Risco", badge:riskClass},
  {k:"statusColeta", l:"Status Coleta", badge:coletaClass}, {k:"status", l:"Status", badge:riskClass}
];
let baseSortState = { key:"dop", dir:1 };
let gestaoSortState = { key:"backlogOps", dir:-1 };
function fmtDate(iso){
  if(!iso) return "—";
  const d = new Date(iso);
  if(isNaN(d)) return iso;
  return d.toLocaleString("pt-BR", {day:"2-digit",month:"2-digit",year:"numeric",hour:"2-digit",minute:"2-digit"});
}
function openDetail(dop){
  const d = DATA.find(x=>String(x.dop)===String(dop));
  document.querySelectorAll(".nav-item").forEach(n=>n.classList.remove("active"));
  document.querySelector('.nav-item[data-section="detalhe"]').classList.add("active");
  document.querySelectorAll(".section").forEach(s=>s.classList.remove("active"));
  document.getElementById("sec-detalhe").classList.add("active");
  document.getElementById("detail-search").value = d ? d.agencia : "";
  renderDetail(d);
}
function renderDetail(d){
  const card = document.getElementById("detail-card");
  if(!d){ card.innerHTML = '<div class="empty-state">Nenhuma agência encontrada.</div>'; return; }
  // Se esse DOP tiver dado na planilha de frente (Forward/RR/BSC Failed),
  // "Backlog Envelhecido" e "% Atrasados" vêm de lá em vez da BASE_TRATADA —
  // é a fonte mais atual pros DOPs que ela já está acompanhando por lá.
  const bInfo = backlogInfoForDop(d.dop);
  const pctAtrasadosValor = bInfo ? backlogPctAtrasadosFrente(bInfo) : d.pctAtrasados;
  const fonteNotaAtrasados = bInfo ? `<div style="font-size:10px; color:var(--text-muted); margin-top:3px;">Análise de Backlog · ${bInfo.frente}</div>` : "";
  // Envelhecido é o TOTAL somando todas as frentes onde esse DOP aparece
  // (normalmente só uma, mas soma certo se aparecer em mais de uma), com o
  // detalhamento por frente logo abaixo — mesmo se algumas frentes derem 0.
  const bMatches = backlogAllMatchesForDop(d.dop);
  const envelhecidoPorFrente = bMatches.length ? backlogEnvelhecidoPorFrente(bMatches) : null;
  const backlogEnvelhecidoValor = envelhecidoPorFrente
    ? Object.values(envelhecidoPorFrente).reduce((s,v)=>s+v,0)
    : d.backlogEnvelhecido;
  const envelhecidoBreakdownHtml = envelhecidoPorFrente
    ? `<div class="backlog-envelhecido-breakdown">${backlogEnvelhecidoBreakdownHtml(envelhecidoPorFrente)}</div>`
    : "";
  card.innerHTML = `
    <div class="detail-header">
      <div class="dopid">${d.dop}</div>
      <div>
        <div class="name">${d.agencia}</div>
        <div class="sub">${d.cidade} — ${d.estado} · Responsável: ${d.resp} · Estação ${d.estacao}</div>
      </div>
      <div style="margin-left:auto; display:flex; gap:8px;">
        <span class="badge ${riskClass(d.risco)}"><span class="ic"></span>${d.risco}</span>
        <span class="badge ${riskClass(d.status)}"><span class="ic"></span>${d.status}</span>
      </div>
    </div>
    <div class="detail-grid">
      <div class="detail-item"><div class="l">Backlog Total (OPS)</div><div class="v">${d.backlogOps.toLocaleString("pt-BR")}</div></div>
      <div class="detail-item"><div class="l">% FIFO Semana</div><div class="v">${pctFifo(d.fifoSemana)}</div></div>
      <div class="detail-item"><div class="l">% FIFO Hoje</div><div class="v">${pct0(d.fifoHojeFlag)}</div></div>
      <div class="detail-item"><div class="l">% Same Day Semana</div><div class="v">${pct0(d.sameDaySemana)}</div></div>
      <div class="detail-item"><div class="l">% Same Day Hoje</div><div class="v">${pct0(d.sameDayFlag)}</div></div>
      <div class="detail-item"><div class="l">Inbound / Outbound</div><div class="v">${d.inbound.toLocaleString("pt-BR")} / ${d.outbound.toLocaleString("pt-BR")}</div></div>
      <div class="detail-item"><div class="l">% Atrasados</div><div class="v">${pctAtrasadosValor.toFixed(1)}%</div>${fonteNotaAtrasados}</div>
      <div class="detail-item detail-item-wide"><div class="l">Backlog Envelhecido</div><div class="v">${backlogEnvelhecidoValor.toLocaleString("pt-BR")}</div>${envelhecidoBreakdownHtml}</div>
      <div class="detail-item"><div class="l">Pacotes Perdidos</div><div class="v">${d.perdasQtd}</div></div>
      <div class="detail-item"><div class="l">Valor Perdido</div><div class="v">${d.perdasValor.toLocaleString("pt-BR",{style:"currency",currency:"BRL"})}</div></div>
      <div class="detail-item"><div class="l">Status Coleta</div><div class="v" style="font-size:13px">${d.statusColeta}</div></div>
      <div class="detail-item"><div class="l">Horas sem coleta</div><div class="v">${d.horasSemColeta.toFixed(1)}h</div></div>
      <div class="detail-item"><div class="l">Última Coleta</div><div class="v" style="font-size:13px">${fmtDate(d.ultimaColeta)}</div></div>
      <div class="detail-item"><div class="l">Maturação</div><div class="v" style="font-size:13px">${d.maturacao}</div></div>
      <div class="detail-item"><div class="l">Teve coleta</div><div class="v" style="font-size:13px">${d.tevecoleta}</div></div>
      <div class="detail-item"><div class="l">Atualizado em</div><div class="v" style="font-size:13px">${fmtDate(d.data)}</div></div>
    </div>`;
}
document.getElementById("detail-search").addEventListener("input", e=>{
  const q = e.target.value.trim().toLowerCase();
  if(!q){ document.getElementById("detail-card").innerHTML = '<div class="empty-state">Busque uma agência pelo DOP ou nome para ver o detalhe completo.</div>'; return; }
  const d = DATA.find(x => String(x.dop).toLowerCase()===q || x.agencia.toLowerCase().includes(q) || x.fantasia.toLowerCase().includes(q));
  renderDetail(d);
});
function renderGestaoPills(){
  const el = document.getElementById("gestao-pills");
  const names = uniq("resp");
  el.innerHTML = "";
  names.forEach(n=>{
    const p = document.createElement("div");
    p.className = "pill"+(filters.gestaoResp===n?" active":"");
    p.textContent = n;
    p.onclick = ()=>{ filters.gestaoResp = filters.gestaoResp===n?null:n; renderAll(); };
    el.appendChild(p);
  });
}
function renderAll(){
  const rows = filtered();
  CURRENT_ROWS = rows;
  renderKpis("kpi-grid", kpiCardsPrimary(rows));
  renderKpis("kpi-grid-extra", kpiCardsSecondary(rows));
  renderAlerts(rows);
  // (gráficos de rosca de Risco, Status de Coleta e Cidade removidos do Resumo Geral)
  renderRankLists(rows);
  renderSemColetaTable(rows);
  renderTable("table-desempenho", rows, TABLE_COLS, sortState);
  renderTable("table-base", rows, BASE_COLS, baseSortState);
  // (aba "Minha Gestão" removida — o filtro "Responsável" do topo faz o mesmo em todas as abas)
  const dates = rows.map(d=>d.data).filter(Boolean).sort();
  const last = dates[dates.length-1];
  document.getElementById("update-chip").title = "Última linha atualizada na planilha: " + (last ? fmtDate(last) : "—");
  // Se o Histórico Pós-Fechamento já foi carregado, atualiza o ranking dele
  // também — os filtros do topo (Responsável, Estação, etc.) devem valer
  // pra ele igual valem pro resto do painel.
  if(HIST_LOADED) renderHistoricoRanking();
  // Mesma lógica pra Análise de Backlog, já carregada ou não.
  if(BACKLOG_LOADED) renderBacklogAnalise(backlogSearchInput ? backlogSearchInput.value : "");
}
// nav
document.querySelectorAll(".nav-item").forEach(item=>{
  item.addEventListener("click", ()=>{
    document.querySelectorAll(".nav-item").forEach(n=>n.classList.remove("active"));
    item.classList.add("active");
    document.querySelectorAll(".section").forEach(s=>s.classList.remove("active"));
    document.getElementById("sec-"+item.dataset.section).classList.add("active");
    if(item.dataset.section === "historico" && !HIST_LOADED){ loadHistorico(); }
    if(item.dataset.section === "sameday" && SD_ROWS.length){ renderSameDaySection(); }
    if(item.dataset.section === "leadtime"){ if(!LT_LOADED || (!LT_BUSCOU && !LT_PENDENTE)) loadLeadTime(); if(LT_LOADED) renderLeadTime(); }
    if(item.dataset.section === "backlog" && !BACKLOG_LOADED){ loadBacklogAnalise(); }
    if(item.dataset.section === "notasfiscais" && !NF_LOADED){ loadNotasFiscais(); }
  });
});
document.querySelectorAll("[data-goto]").forEach(el=>{
  el.addEventListener("click", ()=>{
    document.querySelector('.nav-item[data-section="'+el.dataset.goto+'"]').click();
  });
});
// Toggles "ver todas / ver ranking completo" ↔ "fechar" dos cards do Resumo
// Geral — reaproveita os dados já filtrados (CURRENT_ROWS), sem precisar
// refazer todo o renderAll().
wireExpandToggle("alerts-toggle-top","alerts-toggle-bottom","alerts", ()=> renderAlerts(CURRENT_ROWS));
wireExpandToggle("fifo-resumo-toggle-top","fifo-resumo-toggle-bottom","fifoResumo", ()=> renderRankLists(CURRENT_ROWS));
wireExpandToggle("sameday-resumo-toggle-top","sameday-resumo-toggle-bottom","sdResumo", ()=> renderRankLists(CURRENT_ROWS));
wireExpandToggle("losses-toggle-top","losses-toggle-bottom","losses", ()=> renderRankLists(CURRENT_ROWS));
wireExpandToggle("semcoleta-toggle-top","semcoleta-toggle-bottom","semColeta", ()=> renderSemColetaTable(CURRENT_ROWS));
wireExpandToggle("poscoleta-toggle-top","poscoleta-toggle-bottom","posColeta", ()=> renderRankLists(CURRENT_ROWS));
// ==================== ABA SAME DAY (gráficos + ranking por agência) ====================
// Tudo aqui vem da base do Data Studio (SD_ROWS / SD_TREND) e tem filtros
// próprios (Sub-regional / Station / Responsável), pra poder comparar todas
// as sub-regionais mesmo quando o topo do painel está filtrado.
const sdView = { ini:"", subreg:"", station:"", resp:"", busca:"", showAllStations:false, showAllRank:false,
  sort:{ key:"fora", dir:-1 } };
const SD_RANK_PREVIEW = 25, SD_STATION_PREVIEW = 12;
function esc(v){ return String(v==null?"":v).replace(/[&<>"']/g, c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c])); }
function sdNum(n){ return Math.round(n||0).toLocaleString("pt-BR"); }
function sdPct(v){ return ((v||0)*100).toFixed(2).replace(".",",")+"%"; }
// a aba usa sempre as colunas "D" = soma do período escolhido no calendário
function sdSuf(){ return "D"; }
function sdVal(r,k){ return r[k+sdSuf()] || 0; }
function sdSalvar(){ try{ localStorage.setItem("sdView", JSON.stringify({subreg:sdView.subreg, station:sdView.station, resp:sdView.resp})); }catch(e){} }
(function sdCarregarPrefs(){
  try{ const p = JSON.parse(localStorage.getItem("sdView")||"null"); if(p) Object.assign(sdView, p); else sdView.subreg = "__default__"; }
  catch(e){ sdView.subreg = "__default__"; }
})();
// Filtra as linhas pelos filtros da aba, ignorando os que estão em "skip"
function sdFiltrar(rows, skip){
  skip = skip || [];
  return rows.filter(r=>
    (skip.includes("subreg") || !sdView.subreg || r.subreg===sdView.subreg) &&
    (skip.includes("station") || !sdView.station || r.station===sdView.station) &&
    (skip.includes("resp") || !sdView.resp || r.resp===sdView.resp));
}
function sdAgrupar(rows, campo){
  const g = {};
  rows.forEach(r=>{
    const k = (campo==="_todos") ? "_todos" : (r[campo] || "—");
    const o = g[k] || (g[k] = {label:k, inb:0, out:0, sd:0, next:0, posCol:0, posFech:0, dops:0});
    o.inb += sdVal(r,"inb"); o.out += sdVal(r,"out"); o.sd += sdVal(r,"sd");
    o.next += sdVal(r,"next"); o.posCol += sdVal(r,"posCol"); o.posFech += sdVal(r,"posFech");
    if(sdVal(r,"out")>0) o.dops++;
  });
  return Object.values(g).filter(o=>o.out>0).map(o=>Object.assign(o, {pct:o.sd/o.out}));
}
function sdTotais(rows){ return sdAgrupar(rows, "_todos")[0] || {inb:0,out:0,sd:0,next:0,posCol:0,posFech:0,dops:0,pct:0}; }
function sdOptions(id, values, atual){
  const sel = document.getElementById(id); if(!sel) return;
  const vazio = sel.dataset.empty || "Todos";
  sel.innerHTML = `<option value="">${vazio}</option>` + values.map(v=>`<option value="${esc(v)}">${esc(v)}</option>`).join("");
  sel.value = values.includes(atual) ? atual : "";
}
function sdInitFiltros(){
  if(!SD_ROWS.length) return;
  if(sdView.subreg==="__default__"){
    sdView.subreg = SD_ROWS.some(r=>r.subreg==="CO") ? "CO" : "";
  }
  sdAtualizarFiltros();
}
function sdAtualizarFiltros(){
  const u = (rows,k)=>[...new Set(rows.map(r=>r[k]).filter(Boolean))].sort((a,b)=>a.localeCompare(b,"pt-BR"));
  const subregs = u(SD_ROWS,"subreg");
  if(sdView.subreg && !subregs.includes(sdView.subreg)) sdView.subreg = "";
  sdOptions("sd-f-subreg", subregs, sdView.subreg);
  const stations = u(sdFiltrar(SD_ROWS,["station","resp"]),"station");
  if(sdView.station && !stations.includes(sdView.station)) sdView.station = "";
  sdOptions("sd-f-station", stations, sdView.station);
  const resps = u(sdFiltrar(SD_ROWS,["resp"]),"resp");
  if(sdView.resp && !resps.includes(sdView.resp)) sdView.resp = "";
  sdOptions("sd-f-resp", resps, sdView.resp);
  document.querySelectorAll("#sd-periodo button").forEach(b=>b.classList.toggle("active", b.dataset.p===sdPresetAtual()));
}
function sdSet(campo, valor){
  sdView[campo] = valor;
  if(campo==="subreg"){ sdView.station = ""; sdView.showAllStations = false; }
  sdView.showAllRank = false;
  sdAtualizarFiltros(); sdSalvar(); renderSameDaySection();
}
["subreg","station","resp"].forEach(k=>{
  const el = document.getElementById("sd-f-"+k);
  if(el) el.addEventListener("change", e=> sdSet(k, e.target.value));
});
document.querySelectorAll("#sd-periodo button").forEach(b=>{
  b.addEventListener("click", ()=>{ const r = sdPreset(b.dataset.p); if(r) sdCarregarPeriodo(r[0], r[1]); });
});
const sdLimparBtn = document.getElementById("sd-limpar");
if(sdLimparBtn) sdLimparBtn.addEventListener("click", ()=>{
  sdView.subreg=""; sdView.station=""; sdView.resp=""; sdView.busca="";
  const b=document.getElementById("sd-busca"); if(b) b.value="";
  sdAtualizarFiltros(); sdSalvar();
  if(SD_SEC_INFO && (SD_SEC_INFO.periodoIni!==SD_SEC_INFO.ultimoDia || SD_SEC_INFO.periodoFim!==SD_SEC_INFO.ultimoDia)) sdCarregarPeriodo(SD_SEC_INFO.ultimoDia, SD_SEC_INFO.ultimoDia);
  else renderSameDaySection();
});
const sdBuscaInput = document.getElementById("sd-busca");
if(sdBuscaInput) sdBuscaInput.addEventListener("input", e=>{ sdView.busca = e.target.value.trim().toLowerCase(); sdView.showAllRank=false; renderSdRanking(); });

// ---- tooltip ----
let sdTipEl = null;
function sdTip(html, ev){
  if(!sdTipEl){ sdTipEl = document.createElement("div"); sdTipEl.className = "sd-tip"; document.body.appendChild(sdTipEl); }
  if(!html){ sdTipEl.style.display = "none"; return; }
  sdTipEl.innerHTML = html; sdTipEl.style.display = "block";
  const w = sdTipEl.offsetWidth, h = sdTipEl.offsetHeight;
  let x = ev.clientX + 14, y = ev.clientY + 14;
  if(x + w > window.innerWidth - 8) x = ev.clientX - w - 14;
  if(y + h > window.innerHeight - 8) y = ev.clientY - h - 14;
  sdTipEl.style.left = x + "px"; sdTipEl.style.top = y + "px";
}
function sdTipHtml(titulo, o, opts){
  opts = opts || {};
  return `<div class="t">${esc(titulo)}</div>
    <div class="r">Same Day <b>${sdPct(o.pct)}</b></div>
    <div class="r">Pickup <b>${sdNum(o.out)}</b></div>
    <div class="r">Pickup Same Day <b>${sdNum(o.sd)}</b></div>
    <div class="r">Fora do Same Day <b>${sdNum(o.out-o.sd)}</b></div>
    ${opts.semNext ? "" : `<div class="r">Recebidos pós-coleta <b>${sdNum(o.posCol)}</b></div>`}
    ${opts.semNext ? "" : `<div class="r">Next day <b>${sdNum(o.next)}</b></div>`}
    ${o.dops!=null && !opts.semDops ? `<div class="r">DOPs <b>${sdNum(o.dops)}</b></div>` : ""}`;
}

// ---- barras horizontais (sub-regional / station) ----
// Barra = % Same Day (eixo 0–100%). Linha tracejada = % do conjunto todo,
// pra ver de cara quem está abaixo da média.
function sdBarras(elId, grupos, selecionado, onClick, refPct, refLabel){
  const el = document.getElementById(elId); if(!el) return;
  if(!grupos.length){ el.innerHTML = '<div class="empty-state">Sem dados para esse filtro.</div>'; return; }
  el.innerHTML = grupos.map((g,i)=>{
    const cls = g.label===selecionado ? "sel" : (selecionado ? "dim" : "");
    return `<div class="sd-bar-row ${cls}" data-i="${i}">
      <div class="sd-bar-label" title="${esc(g.label)}">${esc(g.label)}</div>
      <div class="sd-bar-track"><div class="sd-bar-fill" style="width:${(g.pct*100).toFixed(2)}%"></div>
        ${refPct!=null?`<div class="sd-bar-ref" style="left:${(refPct*100).toFixed(2)}%"></div>`:""}</div>
      <div class="sd-bar-val">${sdPct(g.pct)}</div>
    </div>`;
  }).join("");
  el.querySelectorAll(".sd-bar-row").forEach(row=>{
    const g = grupos[+row.dataset.i];
    const ref = refPct!=null ? `<div class="r" style="margin-top:4px;border-top:1px solid var(--border);padding-top:4px">${esc(refLabel||"Média")} <b>${sdPct(refPct)}</b></div>` : "";
    row.addEventListener("mousemove", ev=> sdTip(sdTipHtml(g.label, g) + ref, ev));
    row.addEventListener("mouseleave", ()=> sdTip(null));
    row.addEventListener("click", ()=>{ sdTip(null); onClick(g.label); });
  });
}

// ---- linha de evolução diária ----
function sdTrend(){
  const el = document.getElementById("sd-chart-trend"); if(!el) return;
  const porDia = {};
  sdFiltrar(SD_TREND).forEach(t=>{ const o = porDia[t.dia] || (porDia[t.dia] = {out:0, sd:0}); o.out += t.out; o.sd += t.sd; });
  const dias = ((SD_SEC_INFO && SD_SEC_INFO.dias && SD_SEC_INFO.dias.length) ? SD_SEC_INFO.dias : Object.keys(porDia).sort())
    .filter(d=>porDia[d] && porDia[d].out>0);
  const hint = document.getElementById("sd-trend-hint");
  if(hint) hint.textContent = "últimos " + dias.length + " dias com coleta · " + sdEscopoTexto();
  if(dias.length < 2){ el.innerHTML = '<div class="empty-state">Poucos dias com dados para esse filtro.</div>'; return; }
  const pts = dias.map(d=>({dia:d, out:porDia[d].out, sd:porDia[d].sd, pct:porDia[d].sd/porDia[d].out}));
  const W = Math.max(320, el.clientWidth || 600), H = el.clientHeight || 220;
  const m = {l:44, r:20, t:22, b:26};
  const iw = W-m.l-m.r, ih = H-m.t-m.b;
  let lo = Math.min(...pts.map(p=>p.pct)), hi = Math.max(...pts.map(p=>p.pct));
  lo = Math.max(0, Math.floor((lo-0.02)*20)/20); hi = Math.min(1, Math.ceil((hi+0.01)*20)/20);
  if(hi-lo < 0.05) hi = Math.min(1, lo+0.05);
  const x = i => m.l + i*iw/(pts.length-1);
  const y = v => m.t + ih - (v-lo)/(hi-lo)*ih;
  const ticks = []; for(let v=lo; v<=hi+1e-9; v+=0.05) ticks.push(v);
  const path = pts.map((p,i)=>(i?"L":"M")+x(i).toFixed(1)+","+y(p.pct).toFixed(1)).join(" ");
  const passo = Math.ceil(pts.length/8);
  const ult = pts[pts.length-1];
  el.innerHTML = `<svg viewBox="0 0 ${W} ${H}" width="${W}" height="${H}" role="img" aria-label="Evolução diária do Same Day">
    ${ticks.map(v=>`<line x1="${m.l}" x2="${W-m.r}" y1="${y(v)}" y2="${y(v)}" stroke="var(--grid)" stroke-width="1"/>
      <text x="${m.l-8}" y="${y(v)+4}" text-anchor="end">${Math.round(v*100)}%</text>`).join("")}
    ${pts.map((p,i)=> (i%passo===0 || i===pts.length-1) ? `<text x="${x(i)}" y="${H-6}" text-anchor="middle">${fmtDiaBR(p.dia)}</text>` : "").join("")}
    <path d="${path}" fill="none" stroke="var(--brand)" stroke-width="2" stroke-linejoin="round" stroke-linecap="round"/>
    ${pts.map((p,i)=>`<circle class="sd-pt" data-i="${i}" cx="${x(i)}" cy="${y(p.pct)}" r="4" fill="var(--brand)" stroke="var(--surface-2)" stroke-width="2"/>`).join("")}
    <text x="${x(pts.length-1)}" y="${y(ult.pct)-10}" text-anchor="end" style="fill:var(--text-primary);font-weight:700">${sdPct(ult.pct)}</text>
    <line class="sd-cross" x1="0" x2="0" y1="${m.t}" y2="${m.t+ih}" stroke="var(--text-muted)" stroke-dasharray="3 3" style="display:none"/>
    <rect class="sd-hit" x="${m.l-10}" y="${m.t}" width="${iw+20}" height="${ih}" fill="transparent"/>
  </svg>`;
  const svg = el.querySelector("svg"), hit = el.querySelector(".sd-hit"), cross = el.querySelector(".sd-cross");
  hit.addEventListener("mousemove", ev=>{
    const r = svg.getBoundingClientRect();
    const px = (ev.clientX - r.left) * (W / r.width);
    const i = Math.max(0, Math.min(pts.length-1, Math.round((px-m.l)/(iw/(pts.length-1)))));
    const p = pts[i];
    cross.setAttribute("x1", x(i)); cross.setAttribute("x2", x(i)); cross.style.display = "";
    el.querySelectorAll(".sd-pt").forEach(c=>c.setAttribute("r", +c.dataset.i===i ? 6 : 4));
    const [a,mm,d] = p.dia.split("-");
    sdTip(sdTipHtml(d+"/"+mm+"/"+a, p, {semNext:true, semDops:true}), ev);
  });
  hit.addEventListener("mouseleave", ()=>{ cross.style.display = "none"; el.querySelectorAll(".sd-pt").forEach(c=>c.setAttribute("r",4)); sdTip(null); });
}
let sdResizeT;
window.addEventListener("resize", ()=>{ clearTimeout(sdResizeT); sdResizeT = setTimeout(()=>{ if(SD_ROWS.length) sdTrend(); }, 200); });

function sdEscopoTexto(){
  const p = [];
  if(sdView.subreg) p.push(sdView.subreg);
  if(sdView.station) p.push(sdView.station);
  if(sdView.resp) p.push(sdView.resp);
  return p.length ? p.join(" · ") : "Regional 4";
}
function sdPeriodoTexto(){
  const I = SD_SEC_INFO; if(!I) return "";
  if(I.periodoIni===I.periodoFim) return "dia " + fmtDiaBR(I.periodoFim);
  return fmtDiaBR(I.periodoIni) + " a " + fmtDiaBR(I.periodoFim) + " (" + I.diasNoPeriodo + " dias com coleta)";
}
// ---- calendário (data início / data fim) ----
// Transforma a resposta do Apps Script nos dados da aba
function sdAplicarDadosSecao(json){
  SD_ROWS = json.rows.map(r=>{ const o={}; json.cols.forEach((c,i)=>o[c]=r[i]); return o; });
  SD_TREND = (json.trend||[]).map(r=>{ const o={}; (json.trendCols||[]).forEach((c,i)=>o[c]=r[i]); return o; });
  const fim = json.periodoFim || json.refDia;
  SD_CACHE_DATAS[(json.periodoIni || json.refDia) + "_" + fim] = json;
  SD_SEC_INFO = { refDia: json.refDia, ultimoDia: json.ultimoDia || json.refDia,
    periodoIni: json.periodoIni || json.refDia, periodoFim: fim, diasNoPeriodo: json.diasNoPeriodo || 1,
    semana: json.semana, semanaIni: json.semanaIni, semanaFim: json.semanaFim,
    dias: json.dias || [], diasDisponiveis: json.diasDisponiveis || [], diasPendentes: json.diasPendentes || [] };
  const disp = SD_SEC_INFO.diasDisponiveis;
  ["sd-f-ini","sd-f-fim"].forEach(id=>{
    const inp = document.getElementById(id); if(!inp) return;
    if(disp.length){ inp.min = disp[0]; inp.max = disp[disp.length-1]; }
  });
  const a = document.getElementById("sd-f-ini"), b = document.getElementById("sd-f-fim");
  if(a) a.value = SD_SEC_INFO.periodoIni || "";
  if(b) b.value = SD_SEC_INFO.periodoFim || "";
  document.querySelectorAll("#sd-periodo button").forEach(bt=>bt.classList.toggle("active", bt.dataset.p===sdPresetAtual()));
}
// Atalhos: Último dia / Semana / 7 dias / Mês (sempre a partir do último dia com dados)
function sdPreset(tipo){
  const I = SD_SEC_INFO; if(!I) return null;
  const disp = I.diasDisponiveis || [], ult = I.ultimoDia;
  if(!ult) return null;
  if(tipo==="dia") return [ult, ult];
  if(tipo==="7d"){ const ds = disp.filter(d=>d<=ult).slice(-7); return [ds[0]||ult, ult]; }
  if(tipo==="mes") return [ult.slice(0,8)+"01", ult];
  if(tipo==="semana"){
    // segunda-feira da semana do último dia
    const d = new Date(ult+"T12:00:00"); const dow = (d.getDay()+6)%7; d.setDate(d.getDate()-dow);
    return [d.toISOString().slice(0,10), ult];
  }
  return null;
}
function sdPresetAtual(){
  const I = SD_SEC_INFO; if(!I) return "dia";
  for(const t of ["dia","semana","7d","mes"]){
    const r = sdPreset(t); if(!r) continue;
    const ini = (I.diasDisponiveis||[]).filter(d=>d>=r[0] && d<=r[1])[0];
    if(ini===I.periodoIni && r[1]===I.periodoFim) return t;
  }
  return "";
}
const SD_CACHE_DATAS = {};
async function sdCarregarPeriodo(ini, fim){
  if(!ini && !fim) return;
  ini = ini || fim; fim = fim || ini;
  if(ini > fim){ const t = ini; ini = fim; fim = t; }
  const sub = document.getElementById("sd-subtitle");
  const ultimo = SD_SEC_INFO && SD_SEC_INFO.ultimoDia;
  sdView.ini = (ini===ultimo && fim===ultimo) ? "" : ini;
  if(sub) sub.textContent = "— carregando " + (ini===fim ? fmtDiaBR(ini) : fmtDiaBR(ini) + " a " + fmtDiaBR(fim)) + "…";
  const chave = ini + "_" + fim;
  try{
    let json = SD_CACHE_DATAS[chave];
    if(!json){
      const sep = API_URL.indexOf("?") >= 0 ? "&" : "?";
      json = await fetchViaIframe(API_URL + sep + "tipo=sameday&ini=" + encodeURIComponent(ini) + "&fim=" + encodeURIComponent(fim), 90000);
      if(!json || !json.rows) throw new Error("resposta sem dados");
      SD_CACHE_DATAS[chave] = json;
    }
    sdAplicarDadosSecao(json);
    sdView.showAllRank = false; sdView.showAllStations = false;
    sdAtualizarFiltros();
    renderSameDaySection();
    if(json.periodoIni && (json.periodoIni!==ini || json.periodoFim!==fim) && sub)
      sub.textContent += " (ajustado para os dias com coleta)";
  } catch(err){
    console.error("Same Day (período):", err);
    if(sub) sub.textContent = "— não foi possível carregar o período (" + err.message + ")";
    if(SD_SEC_INFO){
      const a = document.getElementById("sd-f-ini"), b = document.getElementById("sd-f-fim");
      if(a) a.value = SD_SEC_INFO.periodoIni; if(b) b.value = SD_SEC_INFO.periodoFim;
    }
  }
}
["sd-f-ini","sd-f-fim"].forEach(id=>{
  const el = document.getElementById(id);
  if(el) el.addEventListener("change", ()=>{
    const a = document.getElementById("sd-f-ini").value, b = document.getElementById("sd-f-fim").value;
    if(a || b) sdCarregarPeriodo(a, b);
  });
});

// ---- ranking por agência ----
// Mesmas colunas do "Ranking DOP" do Data Studio, + "Fora do SD"
// (pickup − pickup same day), que é o que derruba o %. % Impacto segue a
// regra do Data Studio: inbound pós-coleta do DOP ÷ total do filtro.
const SD_RANK_COLS = [
  {k:"pos", l:"#", num:true, nosort:true},
  {k:"dop", l:"DOP"}, {k:"nome", l:"Agência"}, {k:"station", l:"Station"}, {k:"resp", l:"Responsável"},
  {k:"inb", l:"Inbound", num:true}, {k:"out", l:"Pickup", num:true}, {k:"sd", l:"Pickup SD", num:true},
  {k:"pct", l:"Same Day", num:true}, {k:"fora", l:"Fora do SD", num:true},
  {k:"posCol", l:"Inb. pós-coleta", num:true}, {k:"next", l:"Next day", num:true}, {k:"impacto", l:"% Impacto", num:true}
];
function renderSdRanking(){
  const el = document.getElementById("sd-ranking"); if(!el) return;
  let rows = sdFiltrar(SD_ROWS).filter(r=>sdVal(r,"out")>0).map(r=>({
    raw:r, dop:"DOP"+r.id, nome:r.nome||"—", station:r.station, resp:r.resp, cidade:r.cidade||"",
    inb:sdVal(r,"inb"), out:sdVal(r,"out"), sd:sdVal(r,"sd"), next:sdVal(r,"next"), posCol:sdVal(r,"posCol")
  }));
  const totPosCol = rows.reduce((s,r)=>s+r.posCol,0);
  rows.forEach(r=>{ r.pct = r.sd/r.out; r.fora = r.out-r.sd; r.impacto = totPosCol ? r.posCol/totPosCol : 0; });
  if(sdView.busca) rows = rows.filter(r=> (r.dop+" "+r.nome+" "+r.cidade+" "+r.station).toLowerCase().includes(sdView.busca));
  const st = sdView.sort;
  rows.sort((a,b)=>{ const va=a[st.key], vb=b[st.key];
    const c = typeof va==="number" ? va-vb : String(va||"").localeCompare(String(vb||""),"pt-BR");
    return c*st.dir || (b.fora-a.fora); });
  const tot = rows.reduce((t,r)=>{ ["inb","out","sd","next","posCol","fora"].forEach(k=>t[k]+=r[k]); return t; }, {inb:0,out:0,sd:0,next:0,posCol:0,fora:0});
  const vis = sdView.showAllRank ? rows : rows.slice(0, SD_RANK_PREVIEW);
  const seta = k => st.key===k ? (st.dir<0?" ▼":" ▲") : "";
  const cel = (c,r,i)=>{
    switch(c.k){
      case "pos": return i+1;
      case "nome": return `<span title="${esc(r.nome)}">${esc(r.nome.length>26 ? r.nome.slice(0,25)+"…" : r.nome)}</span>`;
      case "pct": return `<span class="badge ${fifoBadgeClass(r.pct)}"><span class="ic"></span>${sdPct(r.pct)}</span>`;
      case "impacto": return sdPct(r.impacto);
      case "dop": case "station": case "resp": return esc(r[c.k]||"—");
      default: return sdNum(r[c.k]);
    }
  };
  el.innerHTML = `<thead><tr>${SD_RANK_COLS.map(c=>`<th class="${c.num?"num":""}" data-k="${c.k}" ${c.nosort?'style="cursor:default"':""}>${c.l}${seta(c.k)}</th>`).join("")}</tr></thead>
    <tbody>${vis.map((r,i)=>`<tr data-dop="${esc(r.raw.id)}">${SD_RANK_COLS.map(c=>`<td class="${c.num?"num":""}">${cel(c,r,i)}</td>`).join("")}</tr>`).join("")
      || `<tr><td colspan="${SD_RANK_COLS.length}"><div class="empty-state">Nenhuma agência para esse filtro.</div></td></tr>`}</tbody>
    ${rows.length?`<tfoot><tr style="font-weight:700">
      <td></td><td colspan="4">Total (${sdNum(rows.length)} agências)</td>
      <td class="num">${sdNum(tot.inb)}</td><td class="num">${sdNum(tot.out)}</td><td class="num">${sdNum(tot.sd)}</td>
      <td class="num">${sdPct(tot.out?tot.sd/tot.out:0)}</td><td class="num">${sdNum(tot.fora)}</td>
      <td class="num">${sdNum(tot.posCol)}</td><td class="num">${sdNum(tot.next)}</td><td class="num">100%</td></tr></tfoot>`:""}`;
  el.querySelectorAll("th").forEach(th=>{
    const k = th.dataset.k; if(k==="pos") return;
    th.onclick = ()=>{ if(st.key===k) st.dir*=-1; else { st.key=k; st.dir = (["dop","nome","station","resp","pct"].includes(k)) ? 1 : -1; } renderSdRanking(); };
  });
  el.querySelectorAll("tbody tr[data-dop]").forEach(tr=>{
    tr.onclick = ()=>{ const d = DATA.find(x=>dopKey(x.dop)===tr.dataset.dop); if(d) openDetail(d.dop); };
  });
  const more = document.getElementById("sd-ranking-more");
  if(more){
    more.style.display = rows.length > SD_RANK_PREVIEW ? "" : "none";
    more.textContent = sdView.showAllRank ? "− Mostrar só as " + SD_RANK_PREVIEW + " primeiras" : "+ Ver todas as " + sdNum(rows.length) + " agências";
    more.onclick = ()=>{ sdView.showAllRank = !sdView.showAllRank; renderSdRanking(); };
  }
}

function renderSameDaySection(){
  if(!SD_ROWS.length || !SD_SEC_INFO) return;
  const sub = document.getElementById("sd-subtitle");
  if(sub) sub.textContent = "— " + sdPeriodoTexto() + " · " + sdEscopoTexto()
    + (SD_SEC_INFO.refDia!==SD_SEC_INFO.ultimoDia ? " · último dia disponível: " + fmtDiaBR(SD_SEC_INFO.ultimoDia) : "")
    // dia mais novo que ainda não carregou por completo na base de origem
    + ((SD_SEC_INFO.diasPendentes||[]).length ? " · " + SD_SEC_INFO.diasPendentes.map(d=>fmtDiaBR(d.dia)).join(", ")
        + " ainda não carregou na base (" + SD_SEC_INFO.diasPendentes.map(d=>sdNum(d.pacotes)).join(", ") + " pacotes)" : "");
  // KPIs do escopo filtrado
  const t = sdTotais(sdFiltrar(SD_ROWS));
  renderKpis("sd-kpis", [
    {label:"% Same Day", value: sdPct(t.pct), icon:"⚡", cls: t.pct<0.85?"crit":(t.pct<0.95?"warn":""), sub: sdNum(t.dops) + " DOPs com pickup"},
    {label:"Pickup", value: sdNum(t.out), icon:"⬆"},
    {label:"Pickup Same Day", value: sdNum(t.sd), icon:"✅"},
    {label:"Fora do Same Day", value: sdNum(t.out-t.sd), icon:"⏳"},
    {label:"Next day", value: sdNum(t.next), icon:"📦"},
    {label:"Recebidos pós-coleta", value: sdNum(t.posCol), icon:"📥", cls: t.posCol>0?"warn":"",
      sub: (t.inb ? (t.posCol/t.inb*100).toFixed(1).replace(".",",") + "% do inbound · " : "") + sdNum(sdFiltrar(SD_ROWS).filter(r=>sdVal(r,"posCol")>0).length) + " DOPs"},
  ]);
  // Sub-regional: sempre mostra todas (só respeita o filtro de responsável)
  const baseReg = sdFiltrar(SD_ROWS,["subreg","station"]);
  const regional = sdTotais(baseReg);
  const subregs = sdAgrupar(baseReg, "subreg").sort((a,b)=>a.label.localeCompare(b.label,"pt-BR"));
  sdBarras("sd-chart-subreg", subregs, sdView.subreg, lbl=> sdSet("subreg", sdView.subreg===lbl ? "" : lbl), regional.pct, "Regional 4");
  // Station: dentro da sub-regional escolhida, pior % primeiro
  const baseSt = sdFiltrar(SD_ROWS,["station"]);
  let stations = sdAgrupar(baseSt, "station").sort((a,b)=>a.pct-b.pct);
  const tit = document.getElementById("sd-station-title");
  if(tit) tit.textContent = "Same Day por Station" + (sdView.subreg ? " — " + sdView.subreg : "") + " (pior primeiro)";
  const totSt = stations.length;
  if(!sdView.showAllStations){
    const top = stations.slice(0, SD_STATION_PREVIEW);
    if(sdView.station && !top.some(g=>g.label===sdView.station)){ const s = stations.find(g=>g.label===sdView.station); if(s) top.push(s); }
    stations = top;
  }
  sdBarras("sd-chart-station", stations, sdView.station, lbl=> sdSet("station", sdView.station===lbl ? "" : lbl),
    sdTotais(baseSt).pct, sdView.subreg ? "Média " + sdView.subreg : "Regional 4");
  const more = document.getElementById("sd-station-more");
  if(more){
    more.style.display = totSt > SD_STATION_PREVIEW ? "" : "none";
    more.textContent = sdView.showAllStations ? "− Mostrar só as " + SD_STATION_PREVIEW + " piores" : "+ Ver todas as " + totSt + " stations";
    more.onclick = ()=>{ sdView.showAllStations = !sdView.showAllStations; renderSameDaySection(); };
  }
  sdTrend();
  renderSdRanking();
}
// ==================== ABA LEAD TIME (planilha "Lead time & on hold") ====================
// Lead time = SOMA(time_total_svp) / SOMA(orders_total_svp), por canal (SVP / Seller).
// Dados via ?tipo=leadtime (LeadTime.gs). Carrega só quando a aba é aberta.
let LT = null;            // { rows, trend, periodoIni, periodoFim, diasDisponiveis... }
let LT_LOADED = false;
const LT_CACHE = {};
// --- Abertura rápida da aba ---
// 1) A busca padrão (últimos 7 dias) é disparada sozinha logo que o painel
//    abre, em segundo plano, igual ao Same Day — quando a pessoa clica na
//    aba, os dados normalmente já chegaram.
// 2) A última resposta fica guardada no navegador (localStorage). Na próxima
//    vez que o painel abrir, a aba mostra essa cópia NA HORA e troca pelos
//    dados novos assim que o Apps Script responder.
let LT_PENDENTE = null;   // busca padrão em andamento (evita pedir duas vezes)
let LT_SEQ = 0;           // nº do último pedido; resposta de pedido antigo não troca a tela
let LT_BUSCOU = false;    // a busca padrão já foi feita nesta sessão?
let LT_NOTA = "";         // complemento do subtítulo ("atualizando…", aviso de cópia salva)
let LT_COPIA_EM = null;   // quando a cópia guardada que está na tela foi salva (null = tela com dados novos)
const LT_LS_KEY = "ltUltimo_v1";
const LT_LS_MAX_MS = 3 * 24 * 60 * 60 * 1000; // cópia com mais de 3 dias não é usada
function ltSalvarLocal(json){
  try{ localStorage.setItem(LT_LS_KEY, JSON.stringify({ salvoEm: Date.now(), json: json })); }
  catch(e){ /* sem espaço ou navegador sem localStorage: só não guarda */ }
}
function ltLerLocal(){
  try{
    const p = JSON.parse(localStorage.getItem(LT_LS_KEY) || "null");
    if(p && p.json && p.json.rows && p.json.cols && (Date.now() - p.salvoEm) < LT_LS_MAX_MS) return p;
  }catch(e){}
  return null;
}
function ltQuandoTxt(ms){
  const d = new Date(ms);
  return d.toLocaleDateString("pt-BR",{day:"2-digit",month:"2-digit"}) + " às " + d.toLocaleTimeString("pt-BR",{hour:"2-digit",minute:"2-digit"});
}
const ltView = { subreg:"__default__", station:"", canal:"", busca:"", showAll:false, showAllStations:false, sort:{ key:"tempo", dir:-1 } };
const LT_RANK_PREVIEW = 25, LT_STATION_PREVIEW = 12;
function ltFmt(v){ return (v||0).toFixed(2).replace(".",","); }
function ltLead(o){ return o.orders ? o.tempo/o.orders : 0; }
function ltFiltrar(rows, skip){
  skip = skip || [];
  return rows.filter(r=>
    (skip.includes("subreg") || !ltView.subreg || r.subreg===ltView.subreg) &&
    (skip.includes("station") || !ltView.station || r.station===ltView.station) &&
    (skip.includes("canal") || !ltView.canal || r.canal===ltView.canal));
}
function ltAgrupar(rows, campo){
  const g = {};
  rows.forEach(r=>{
    const k = campo==="_todos" ? "_todos" : (r[campo] || "—");
    const o = g[k] || (g[k] = {label:k, orders:0, tempo:0, pickup:0, onhold:0, dops:{}});
    o.orders += r.orders||0; o.tempo += r.tempo||0; o.pickup += r.pickup||0; o.onhold += r.onhold||0;
    if(r.id) o.dops[r.id] = 1;
  });
  return Object.values(g).filter(o=>o.orders>0).map(o=>Object.assign(o, {lead: ltLead(o), nDops: Object.keys(o.dops).length}));
}
function ltTotais(rows){ return ltAgrupar(rows,"_todos")[0] || {orders:0,tempo:0,pickup:0,onhold:0,lead:0,nDops:0}; }
function ltEscopoTexto(){
  const p = [];
  if(ltView.subreg) p.push(ltView.subreg);
  if(ltView.station) p.push(ltView.station);
  if(ltView.canal) p.push(ltView.canal);
  return p.length ? p.join(" · ") : "Regional 4";
}
function ltPeriodoTexto(){
  if(!LT) return "";
  return LT.periodoIni===LT.periodoFim ? "dia " + fmtDiaBR(LT.periodoFim)
    : fmtDiaBR(LT.periodoIni) + " a " + fmtDiaBR(LT.periodoFim) + " (" + LT.diasNoPeriodo + " dias)";
}
function ltPreset(tipo){
  const d = (LT && LT.diasDisponiveis) || []; if(!d.length) return null;
  const ult = d[d.length-1];
  if(tipo==="dia") return [ult, ult];
  if(tipo==="7d") return [d.slice(-7)[0], ult];
  if(tipo==="15d") return [d[0], ult];
  return null;
}
function ltPresetAtual(){
  for(const t of ["dia","7d","15d"]){ const r = ltPreset(t); if(r && r[0]===LT.periodoIni && r[1]===LT.periodoFim) return t; }
  return "";
}
function ltAplicar(json){
  const obj = (cols, r)=>{ const o={}; cols.forEach((c,i)=>o[c]=r[i]); return o; };
  LT = Object.assign({}, json, {
    rows: (json.rows||[]).map(r=>obj(json.cols, r)),
    trend: (json.trend||[]).map(r=>obj(json.trendCols, r))
  });
  LT_CACHE[json.periodoIni + "_" + json.periodoFim] = json;
  const disp = LT.diasDisponiveis || [];
  ["lt-f-ini","lt-f-fim"].forEach(id=>{ const el = document.getElementById(id); if(el && disp.length){ el.min = disp[0]; el.max = disp[disp.length-1]; } });
  const a = document.getElementById("lt-f-ini"), b = document.getElementById("lt-f-fim");
  if(a) a.value = LT.periodoIni || ""; if(b) b.value = LT.periodoFim || "";
  if(ltView.subreg==="__default__") ltView.subreg = LT.rows.some(r=>r.subreg==="CO") ? "CO" : "";
}
// Coloca uma resposta na tela (some a animação, mostra o conteúdo).
function ltMostrar(json, manterLista){
  const load = document.getElementById("lt-loading"), cont = document.getElementById("lt-conteudo");
  ltAplicar(json);
  LT_LOADED = true;
  if(load) load.style.display = "none";
  if(cont) cont.style.display = "";
  if(!manterLista){ ltView.showAll = false; ltView.showAllStations = false; }
  ltAtualizarFiltros();
  renderLeadTime();
}
function loadLeadTime(ini, fim){
  if(ini && fim && ini > fim){ const t = ini; ini = fim; fim = t; }
  const padrao = !(ini || fim);
  // busca padrão já em andamento (pré-carga): só espera por ela
  if(padrao && LT_PENDENTE) return LT_PENDENTE;
  const p = ltBuscar(ini, fim, padrao);
  if(padrao){ LT_PENDENTE = p; p.then(()=>{ LT_PENDENTE = null; }); }
  return p;
}
async function ltBuscar(ini, fim, padrao){
  const sub = document.getElementById("lt-subtitle");
  const load = document.getElementById("lt-loading");
  // período escolhido pela pessoa "vence" qualquer busca anterior ainda em andamento
  const seq = padrao ? LT_SEQ : ++LT_SEQ;
  try{
    let json = (ini && fim) ? LT_CACHE[ini + "_" + fim] : null;
    if(!json){
      if(!LT && padrao){
        // nada na tela ainda: mostra a última cópia guardada, se houver
        const copia = ltLerLocal();
        if(copia){ LT_COPIA_EM = copia.salvoEm; ltMostrar(copia.json); }
      }
      if(!LT && load){ load.innerHTML = loaderHtml("Carregando lead time…"); load.style.display = ""; }
      if(padrao && LT_COPIA_EM && LT){ LT_NOTA = " · atualizando…"; renderLeadTime(); }
      else if(sub) sub.textContent = "— carregando…";
      const sep = API_URL.indexOf("?") >= 0 ? "&" : "?";
      const q = (ini || fim) ? "&ini=" + encodeURIComponent(ini||fim) + "&fim=" + encodeURIComponent(fim||ini) : "";
      json = await fetchViaIframe(API_URL + sep + "tipo=leadtime" + q, 90000);
      if(!json || !json.rows || !json.cols) throw new Error("resposta sem dados — confira se o LeadTime.gs foi publicado");
      if(padrao){ LT_BUSCOU = true; ltSalvarLocal(json); }
    }
    if(seq !== LT_SEQ){
      // a pessoa já escolheu outro período enquanto esta busca rodava:
      // guarda a resposta para depois, sem trocar o que está na tela
      LT_CACHE[json.periodoIni + "_" + json.periodoFim] = json;
      return;
    }
    const eraCopia = LT_COPIA_EM !== null;
    LT_NOTA = ""; LT_COPIA_EM = null;
    ltMostrar(json, eraCopia);
  } catch(err){
    console.error("Lead Time:", err);
    if(seq !== LT_SEQ) return;
    if(LT_COPIA_EM && LT){
      // a cópia guardada continua na tela, com aviso de quando ela é
      LT_NOTA = " · ⚠ não consegui atualizar agora; dados salvos em " + ltQuandoTxt(LT_COPIA_EM);
      renderLeadTime();
      return;
    }
    if(sub) sub.textContent = "— não foi possível carregar (" + err.message + ")";
    if(load && !LT) load.innerHTML = '<div class="empty-state">Não foi possível carregar o Lead Time agora (' + esc(err.message) + ').</div>';
  }
}
function ltAtualizarFiltros(){
  if(!LT) return;
  const u = (rows,k)=>[...new Set(rows.map(r=>r[k]).filter(Boolean))].sort((a,b)=>a.localeCompare(b,"pt-BR"));
  const subregs = u(LT.rows,"subreg");
  if(ltView.subreg && !subregs.includes(ltView.subreg)) ltView.subreg = "";
  sdOptions("lt-f-subreg", subregs, ltView.subreg);
  const stations = u(ltFiltrar(LT.rows,["station"]),"station");
  if(ltView.station && !stations.includes(ltView.station)) ltView.station = "";
  sdOptions("lt-f-station", stations, ltView.station);
  const canais = u(LT.rows,"canal");
  if(ltView.canal && !canais.includes(ltView.canal)) ltView.canal = "";
  sdOptions("lt-f-canal", canais, ltView.canal);
  const atual = ltPresetAtual();
  document.querySelectorAll("#lt-periodo button").forEach(b=>b.classList.toggle("active", b.dataset.p===atual));
}
function ltSet(campo, valor){
  ltView[campo] = valor;
  if(campo==="subreg"){ ltView.station = ""; ltView.showAllStations = false; }
  ltView.showAll = false;
  ltAtualizarFiltros(); renderLeadTime();
}
["subreg","station","canal"].forEach(k=>{
  const el = document.getElementById("lt-f-"+k);
  if(el) el.addEventListener("change", e=> ltSet(k, e.target.value));
});
["lt-f-ini","lt-f-fim"].forEach(id=>{
  const el = document.getElementById(id);
  if(el) el.addEventListener("change", ()=>{
    const a = document.getElementById("lt-f-ini").value, b = document.getElementById("lt-f-fim").value;
    if(a || b) loadLeadTime(a || b, b || a);
  });
});
document.querySelectorAll("#lt-periodo button").forEach(b=>{
  b.addEventListener("click", ()=>{ const r = ltPreset(b.dataset.p); if(r) loadLeadTime(r[0], r[1]); });
});
(function(){
  const limpar = document.getElementById("lt-limpar");
  if(limpar) limpar.addEventListener("click", ()=>{
    ltView.subreg = ""; ltView.station = ""; ltView.canal = ""; ltView.busca = "";
    const b = document.getElementById("lt-busca"); if(b) b.value = "";
    ltAtualizarFiltros(); renderLeadTime();
  });
  const busca = document.getElementById("lt-busca");
  if(busca) busca.addEventListener("input", e=>{ ltView.busca = e.target.value.trim().toLowerCase(); ltView.showAll = false; renderLtRanking(); });
})();
function ltTipHtml(titulo, o){
  return `<div class="t">${esc(titulo)}</div>
    <div class="r">Lead time <b>${ltFmt(o.lead)}</b></div>
    <div class="r">Pedidos <b>${sdNum(o.orders)}</b></div>
    <div class="r">Pickup <b>${sdNum(o.pickup)}</b></div>
    <div class="r">On hold <b>${sdNum(o.onhold)}</b></div>
    ${o.nDops ? `<div class="r">DOPs <b>${sdNum(o.nDops)}</b></div>` : ""}`;
}
// Barras horizontais: comprimento = lead time (quanto maior, pior). Linha tracejada = média do conjunto.
function ltBarras(elId, grupos, selecionado, onClick, ref, refLabel, campoValor, fmt){
  const el = document.getElementById(elId); if(!el) return;
  if(!grupos.length){ el.innerHTML = '<div class="empty-state">Sem dados para esse filtro.</div>'; return; }
  const val = g => campoValor ? g[campoValor] : g.lead;
  const f = fmt || ltFmt;
  const max = Math.max(...grupos.map(val), ref||0) || 1;
  el.innerHTML = grupos.map((g,i)=>{
    const cls = g.label===selecionado ? "sel" : (selecionado ? "dim" : "");
    return `<div class="sd-bar-row ${cls}" data-i="${i}" ${onClick?"":'style="cursor:default"'}>
      <div class="sd-bar-label" title="${esc(g.rotulo||g.label)}">${esc(g.rotulo||g.label)}</div>
      <div class="sd-bar-track"><div class="sd-bar-fill" style="width:${(val(g)/max*100).toFixed(2)}%"></div>
        ${ref!=null?`<div class="sd-bar-ref" style="left:${(ref/max*100).toFixed(2)}%"></div>`:""}</div>
      <div class="sd-bar-val">${f(val(g))}</div>
    </div>`;
  }).join("");
  el.querySelectorAll(".sd-bar-row").forEach(row=>{
    const g = grupos[+row.dataset.i];
    const rodape = ref!=null ? `<div class="r" style="margin-top:4px;border-top:1px solid var(--border);padding-top:4px">${esc(refLabel||"Média")} <b>${f(ref)}</b></div>` : "";
    row.addEventListener("mousemove", ev=> sdTip(ltTipHtml(g.rotulo||g.label, g) + rodape, ev));
    row.addEventListener("mouseleave", ()=> sdTip(null));
    if(onClick) row.addEventListener("click", ()=>{ sdTip(null); onClick(g.label); });
  });
}
// Linha: lead time por dia (uma linha por canal quando há mais de um; legenda acima)
const LT_CORES = { "SVP":"var(--brand)", "Seller":"var(--text-muted)" };
function ltTrend(){
  const el = document.getElementById("lt-chart-trend"); if(!el || !LT) return;
  const linhas = ltFiltrar(LT.trend).filter(t=>t.dia>=LT.periodoIniTrend && t.dia<=LT.periodoFim);
  const dias = [...new Set(linhas.map(t=>t.dia))].sort();
  const canais = ltView.canal ? [ltView.canal] : [...new Set(linhas.map(t=>t.canal))].sort((a,b)=> a==="SVP"?-1:b==="SVP"?1:a.localeCompare(b));
  const leg = document.getElementById("lt-trend-legenda");
  if(dias.length < 2){ el.innerHTML = '<div class="empty-state">Poucos dias com dados para esse filtro.</div>'; if(leg) leg.innerHTML = ""; return; }
  const series = canais.map(c=>{
    const porDia = {};
    linhas.filter(t=>t.canal===c).forEach(t=>{ const o = porDia[t.dia] || (porDia[t.dia] = {orders:0,tempo:0,pickup:0,onhold:0}); o.orders+=t.orders; o.tempo+=t.tempo; o.pickup+=t.pickup; o.onhold+=t.onhold; });
    return { canal:c, cor: LT_CORES[c] || "var(--series-1)", pts: dias.map(d=> porDia[d] && porDia[d].orders ? Object.assign({dia:d, lead: ltLead(porDia[d])}, porDia[d]) : null) };
  }).filter(s=>s.pts.some(Boolean));
  if(leg) leg.innerHTML = series.length>1 ? series.map(s=>`<span class="lt-leg"><i style="background:${s.cor}"></i>${esc(s.canal)}</span>`).join("") : "";
  const todos = series.flatMap(s=>s.pts.filter(Boolean).map(p=>p.lead));
  const W = Math.max(320, el.clientWidth || 600), H = el.clientHeight || 220;
  const m = {l:40, r:46, t:18, b:26};
  const iw = W-m.l-m.r, ih = H-m.t-m.b;
  const hi = Math.ceil(Math.max(...todos)*1.1) || 1, lo = 0;
  const x = i => m.l + i*iw/(dias.length-1);
  const y = v => m.t + ih - (v-lo)/(hi-lo)*ih;
  const passoY = hi<=5 ? 1 : hi<=12 ? 2 : hi<=30 ? 5 : 10;
  const ticks = []; for(let v=0; v<=hi; v+=passoY) ticks.push(v);
  const passoX = Math.ceil(dias.length/8);
  el.innerHTML = `<svg viewBox="0 0 ${W} ${H}" width="${W}" height="${H}" role="img" aria-label="Lead time por dia">
    ${ticks.map(v=>`<line x1="${m.l}" x2="${W-m.r}" y1="${y(v)}" y2="${y(v)}" stroke="var(--grid)" stroke-width="1"/><text x="${m.l-8}" y="${y(v)+4}" text-anchor="end">${v}</text>`).join("")}
    ${dias.map((d,i)=> (i%passoX===0 || i===dias.length-1) ? `<text x="${x(i)}" y="${H-6}" text-anchor="middle">${fmtDiaBR(d)}</text>` : "").join("")}
    ${series.map(s=>{
      let d = "", pen = false;
      s.pts.forEach((p,i)=>{ if(!p){ pen=false; return; } d += (pen?"L":"M")+x(i).toFixed(1)+","+y(p.lead).toFixed(1)+" "; pen=true; });
      const ult = [...s.pts].reverse().find(Boolean), iu = s.pts.lastIndexOf(ult);
      return `<path d="${d}" fill="none" stroke="${s.cor}" stroke-width="2" stroke-linejoin="round" stroke-linecap="round"/>
        ${s.pts.map((p,i)=> p ? `<circle cx="${x(i)}" cy="${y(p.lead)}" r="4" fill="${s.cor}" stroke="var(--surface-2)" stroke-width="2"/>` : "").join("")}
        <text x="${x(iu)+8}" y="${y(ult.lead)+4}" style="fill:var(--text-primary);font-weight:700">${ltFmt(ult.lead)}</text>`;
    }).join("")}
    <line class="sd-cross" x1="0" x2="0" y1="${m.t}" y2="${m.t+ih}" stroke="var(--text-muted)" stroke-dasharray="3 3" style="display:none"/>
    <rect class="sd-hit" x="${m.l-10}" y="${m.t}" width="${iw+20}" height="${ih}" fill="transparent"/>
  </svg>`;
  const svg = el.querySelector("svg"), hit = el.querySelector(".sd-hit"), cross = el.querySelector(".sd-cross");
  hit.addEventListener("mousemove", ev=>{
    const r = svg.getBoundingClientRect();
    const px = (ev.clientX - r.left) * (W / r.width);
    const i = Math.max(0, Math.min(dias.length-1, Math.round((px-m.l)/(iw/(dias.length-1)))));
    cross.setAttribute("x1", x(i)); cross.setAttribute("x2", x(i)); cross.style.display = "";
    const [a,mm,d] = dias[i].split("-");
    sdTip(`<div class="t">${d}/${mm}/${a}</div>` + series.map(s=> s.pts[i]
      ? `<div class="r"><span><i class="lt-dot" style="background:${s.cor}"></i>${esc(s.canal)}</span><b>${ltFmt(s.pts[i].lead)}</b></div>` : "").join("")
      + `<div class="r" style="margin-top:4px;border-top:1px solid var(--border);padding-top:4px">On hold <b>${sdNum(series.reduce((t,s)=>t+(s.pts[i]?s.pts[i].onhold:0),0))}</b></div>`, ev);
  });
  hit.addEventListener("mouseleave", ()=>{ cross.style.display = "none"; sdTip(null); });
}
const LT_RANK_COLS = [
  {k:"pos", l:"#", num:true, nosort:true},
  {k:"dop", l:"DOP"}, {k:"nome", l:"Agência"}, {k:"station", l:"Station"}, {k:"canal", l:"Canal"},
  {k:"orders", l:"Pedidos", num:true}, {k:"lead", l:"Lead time", num:true}, {k:"tempo", l:"Tempo total", num:true},
  {k:"pickup", l:"Pickup", num:true}, {k:"trips", l:"Viagens", num:true}, {k:"onhold", l:"On hold", num:true},
  {k:"just", l:"Última justificativa"}
];
function ltBadge(v, ref){ return v > ref*1.5 ? "critical" : v > ref ? "warning" : "good"; }
function renderLtRanking(){
  const el = document.getElementById("lt-ranking"); if(!el || !LT) return;
  let rows = ltFiltrar(LT.rows).filter(r=>r.orders>0).map(r=>Object.assign({}, r, { dop:"DOP"+r.id, lead: ltLead(r) }));
  const ref = ltTotais(rows).lead;
  if(ltView.busca) rows = rows.filter(r=> (r.dop+" "+r.nome+" "+r.station+" "+r.just).toLowerCase().includes(ltView.busca));
  const st = ltView.sort;
  rows.sort((a,b)=>{ const va=a[st.key], vb=b[st.key];
    const c = typeof va==="number" ? va-vb : String(va||"").localeCompare(String(vb||""),"pt-BR");
    return c*st.dir || (b.tempo-a.tempo); });
  const tot = ltTotais(rows);
  const vis = ltView.showAll ? rows : rows.slice(0, LT_RANK_PREVIEW);
  const seta = k => st.key===k ? (st.dir<0?" ▼":" ▲") : "";
  const corta = (t,n)=> t.length>n ? t.slice(0,n-1)+"…" : t;
  const cel = (c,r,i)=>{
    switch(c.k){
      case "pos": return i+1;
      case "nome": return `<span title="${esc(r.nome)}">${esc(corta(r.nome||"—",26))}</span>`;
      case "just": return `<span title="${esc(r.just)}">${esc(corta(r.just||"—",30))}</span>`;
      case "lead": return `<span class="badge ${ltBadge(r.lead, ref)}"><span class="ic"></span>${ltFmt(r.lead)}</span>`;
      case "dop": case "station": case "canal": return esc(r[c.k]||"—");
      default: return sdNum(r[c.k]);
    }
  };
  el.innerHTML = `<thead><tr>${LT_RANK_COLS.map(c=>`<th class="${c.num?"num":""}" data-k="${c.k}" ${c.nosort?'style="cursor:default"':""}>${c.l}${seta(c.k)}</th>`).join("")}</tr></thead>
    <tbody>${vis.map((r,i)=>`<tr data-dop="${esc(r.id)}">${LT_RANK_COLS.map(c=>`<td class="${c.num?"num":""}">${cel(c,r,i)}</td>`).join("")}</tr>`).join("")
      || `<tr><td colspan="${LT_RANK_COLS.length}"><div class="empty-state">Nenhuma agência para esse filtro.</div></td></tr>`}</tbody>
    ${rows.length?`<tfoot><tr style="font-weight:700"><td></td><td colspan="4">Total (${sdNum(rows.length)} linhas)</td>
      <td class="num">${sdNum(tot.orders)}</td><td class="num">${ltFmt(tot.lead)}</td><td class="num">${sdNum(tot.tempo)}</td>
      <td class="num">${sdNum(tot.pickup)}</td><td class="num"></td><td class="num">${sdNum(tot.onhold)}</td><td></td></tr></tfoot>`:""}`;
  el.querySelectorAll("th").forEach(th=>{
    const k = th.dataset.k; if(k==="pos") return;
    th.onclick = ()=>{ if(st.key===k) st.dir*=-1; else { st.key=k; st.dir = (["dop","nome","station","canal","just"].includes(k)) ? 1 : -1; } renderLtRanking(); };
  });
  el.querySelectorAll("tbody tr[data-dop]").forEach(tr=>{
    tr.onclick = ()=>{ const d = DATA.find(x=>dopKey(x.dop)===tr.dataset.dop); if(d) openDetail(d.dop); };
  });
  const more = document.getElementById("lt-ranking-more");
  if(more){
    more.style.display = rows.length > LT_RANK_PREVIEW ? "" : "none";
    more.textContent = ltView.showAll ? "− Mostrar só as " + LT_RANK_PREVIEW + " primeiras" : "+ Ver todas as " + sdNum(rows.length) + " linhas";
    more.onclick = ()=>{ ltView.showAll = !ltView.showAll; renderLtRanking(); };
  }
}
function renderLeadTime(){
  if(!LT) return;
  const sub = document.getElementById("lt-subtitle");
  if(sub) sub.textContent = "— " + ltPeriodoTexto() + " · " + ltEscopoTexto() + LT_NOTA;
  // a linha de evolução mostra o período escolhido ou, no mínimo, os últimos 7 dias até o fim dele
  const ate = (LT.diasDisponiveis||[]).filter(d=>d<=LT.periodoFim);
  const ult7 = ate.slice(-7)[0] || LT.periodoIni;
  LT.periodoIniTrend = LT.periodoIni < ult7 ? LT.periodoIni : ult7;
  const escopo = ltFiltrar(LT.rows);
  const t = ltTotais(escopo);
  const porCanal = ltAgrupar(ltFiltrar(LT.rows,["canal"]), "canal");
  const lc = n => { const g = porCanal.find(x=>x.label===n); return g ? ltFmt(g.lead) : "—"; };
  renderKpis("lt-kpis", [
    {label:"Lead time" + (ltView.canal ? " (" + ltView.canal + ")" : ""), value: ltFmt(t.lead), icon:"⏱", sub: sdNum(t.nDops) + " DOPs"},
    {label:"Lead time SVP", value: lc("SVP"), icon:"🏪"},
    {label:"Lead time Seller", value: lc("Seller"), icon:"🛍"},
    {label:"Pedidos", value: sdNum(t.orders), icon:"🧾"},
    {label:"Pickup", value: sdNum(t.pickup), icon:"⬆"},
    {label:"On hold", value: sdNum(t.onhold), icon:"⏸", cls: t.onhold>0?"warn":""},
  ]);
  const baseReg = ltFiltrar(LT.rows,["subreg","station"]);
  ltBarras("lt-chart-subreg", ltAgrupar(baseReg,"subreg").sort((a,b)=>a.label.localeCompare(b.label,"pt-BR")),
    ltView.subreg, lbl=> ltSet("subreg", ltView.subreg===lbl ? "" : lbl), ltTotais(baseReg).lead, "Regional 4");
  const baseSt = ltFiltrar(LT.rows,["station"]);
  let stations = ltAgrupar(baseSt,"station").sort((a,b)=>b.lead-a.lead);
  const tit = document.getElementById("lt-station-title");
  if(tit) tit.textContent = "Lead time por Station" + (ltView.subreg ? " — " + ltView.subreg : "") + " (pior primeiro)";
  const totSt = stations.length;
  if(!ltView.showAllStations){
    const top = stations.slice(0, LT_STATION_PREVIEW);
    if(ltView.station && !top.some(g=>g.label===ltView.station)){ const s = stations.find(g=>g.label===ltView.station); if(s) top.push(s); }
    stations = top;
  }
  ltBarras("lt-chart-station", stations, ltView.station, lbl=> ltSet("station", ltView.station===lbl ? "" : lbl),
    ltTotais(baseSt).lead, ltView.subreg ? "Média " + ltView.subreg : "Regional 4");
  const more = document.getElementById("lt-station-more");
  if(more){
    more.style.display = totSt > LT_STATION_PREVIEW ? "" : "none";
    more.textContent = ltView.showAllStations ? "− Mostrar só as " + LT_STATION_PREVIEW + " piores" : "+ Ver todas as " + totSt + " stations";
    more.onclick = ()=>{ ltView.showAllStations = !ltView.showAllStations; renderLeadTime(); };
  }
  // on hold por dia (mesmos dias da linha de evolução)
  const porDia = {};
  ltFiltrar(LT.trend).filter(x=>x.dia>=LT.periodoIniTrend && x.dia<=LT.periodoFim).forEach(x=>{
    const o = porDia[x.dia] || (porDia[x.dia] = {label:x.dia, rotulo: fmtDiaBR(x.dia), orders:0, tempo:0, pickup:0, onhold:0});
    o.orders+=x.orders; o.tempo+=x.tempo; o.pickup+=x.pickup; o.onhold+=x.onhold;
  });
  const diasOn = Object.values(porDia).sort((a,b)=>a.label.localeCompare(b.label)).map(o=>Object.assign(o,{lead:ltLead(o)}));
  ltBarras("lt-chart-onhold", diasOn, "", null, null, null, "onhold", sdNum);
  ltTrend();
  renderLtRanking();
}
window.addEventListener("resize", ()=>{ clearTimeout(window._ltResizeT); window._ltResizeT = setTimeout(()=>{ if(LT && document.getElementById("sec-leadtime").classList.contains("active")) ltTrend(); }, 200); });
// ==================== BARRA DE ROLAGEM HORIZONTAL TAMBÉM EM CIMA ====================
// Tabelas largas (ex.: Ranking por Agência) só tinham a barra de arrastar
// embaixo — com muitas linhas era preciso rolar a página até o fim pra mover
// pro lado. Aqui cada .table-wrap ganha uma barra "espelho" logo acima,
// sincronizada com a de baixo. Ela só aparece quando a tabela não cabe.
function addTopScroll(wrap){
  if(wrap.dataset.topScroll) return;
  wrap.dataset.topScroll = "1";
  const top = document.createElement("div");
  top.className = "top-scroll";
  const inner = document.createElement("div");
  top.appendChild(inner);
  wrap.parentNode.insertBefore(top, wrap);
  let sync = false;
  top.addEventListener("scroll", ()=>{ if(sync){ sync=false; return; } sync=true; wrap.scrollLeft = top.scrollLeft; });
  wrap.addEventListener("scroll", ()=>{ if(sync){ sync=false; return; } sync=true; top.scrollLeft = wrap.scrollLeft; });
  const update = ()=>{
    inner.style.width = wrap.scrollWidth + "px";
    top.style.display = wrap.scrollWidth > wrap.clientWidth + 1 ? "block" : "none";
    top.scrollLeft = wrap.scrollLeft;
  };
  update();
  new MutationObserver(()=> requestAnimationFrame(update)).observe(wrap, {childList:true, subtree:true});
  if(window.ResizeObserver) new ResizeObserver(()=> update()).observe(wrap);
  // seções escondidas têm largura 0 — recalcula quando a aba é aberta
  document.querySelectorAll(".nav-item").forEach(n=> n.addEventListener("click", ()=> setTimeout(update, 0)));
}
document.querySelectorAll(".table-wrap").forEach(addTopScroll);
// ==================== CELULAR: menu gaveta + app instalável (PWA) ====================
(function(){
  const abrir = ()=> document.body.classList.add("menu-aberto");
  const fechar = ()=> document.body.classList.remove("menu-aberto");
  const btn = document.getElementById("mobile-menu-btn");
  const fundo = document.getElementById("sidebar-backdrop");
  if(btn) btn.addEventListener("click", ()=> document.body.classList.contains("menu-aberto") ? fechar() : abrir());
  if(fundo) fundo.addEventListener("click", fechar);
  const titulo = document.getElementById("mobile-section-name");
  document.querySelectorAll(".nav-item").forEach(n=> n.addEventListener("click", ()=>{
    fechar();
    if(titulo) titulo.textContent = (n.childNodes[1] && n.childNodes[1].textContent || n.textContent).trim();
    window.scrollTo({top:0});
  }));
  const fbtn = document.getElementById("mobile-filter-btn");
  if(fbtn) fbtn.addEventListener("click", ()=> document.body.classList.toggle("filtros-abertos"));
  // mostra no botão quantos filtros gerais estão ativos
  const contar = ()=>{
    const n = FILTROS_TOPO.filter(k=> filters[k].length).length;
    const c = document.getElementById("mobile-filter-count"); if(c) c.textContent = n ? String(n) : "";
  };
  document.addEventListener("filtros-mudaram", contar);
  const ref = document.getElementById("mobile-refresh-btn");
  if(ref) ref.addEventListener("click", ()=>{ const r = document.getElementById("refresh-btn"); if(r) r.click(); });
  if("serviceWorker" in navigator){
    window.addEventListener("load", ()=> navigator.serviceWorker.register("sw.js").catch(e=>console.warn("SW:", e)));
  }
})();
// theme
const themeBtn = document.getElementById("theme-toggle");
function applyTheme(t){
  document.documentElement.setAttribute("data-theme", t);
  themeBtn.textContent = t==="dark" ? "☀ Modo claro" : "◑ Modo escuro";
}
let currentTheme = "light";
themeBtn.addEventListener("click", ()=>{ currentTheme = currentTheme==="dark"?"light":"dark"; applyTheme(currentTheme); });
applyTheme(currentTheme);
loadData(true);
loadSameDay();
loadBacklogResumo();
// Lead Time em segundo plano, um instante depois das cargas principais (pra
// não disputar com elas): quando a aba for aberta, já está pronto.
setTimeout(()=>{ if(!LT_BUSCOU && !LT_PENDENTE) loadLeadTime(); }, 1500);
setInterval(()=>{ if(!HIST_DIA) loadData(false); }, REFRESH_INTERVAL_MS);
setInterval(()=> loadBacklogResumo(), REFRESH_INTERVAL_MS);
// Pagamentos: só depois que a aba foi aberta pela 1ª vez. A base (PAG_CACHE)
// muda a cada 15 min; buscar a cada 5 garante pegar a leitura nova logo.
setInterval(()=>{ if(NF_LOADED) loadNotasFiscais(true); }, REFRESH_INTERVAL_MS);
setInterval(()=> loadSameDay(), 30 * 60 * 1000); // base de Same Day muda pouco ao longo do dia
