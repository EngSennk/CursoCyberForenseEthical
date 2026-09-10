const PHASES = {
  1: { label: 'Fase 1 — Fundamentos', duration: '2–3 meses' },
  2: { label: 'Fase 2 — Programação', duration: '3–4 meses' },
  3: { label: 'Fase 3 — Computação Forense', duration: '4–6 meses' },
  4: { label: 'Fase 4 — Engenharia Reversa', duration: '4–6 meses' },
  5: { label: 'Fase 5 — Perícia Judicial', duration: 'contínua' }
};

const MODULES = [
  {
    id:'m1', num:'01', phase:1, title:'Fundamentos de TI',
    objective:'Base sólida antes de entrar em investigação digital.',
    groups:[
      { name:'Arquitetura & hardware', items:['Arquitetura de computadores e CPU (registradores, cache)','Memória RAM: stack, heap, endereçamento, memória virtual'] },
      { name:'Armazenamento & redes', items:['Sistemas de arquivos e armazenamento (HDD, SSD, partições)','Redes TCP/IP — fundamentos','Virtualização'] },
      { name:'Base de segurança', items:['Criptografia básica','Linha de comando (Windows e Linux)'] }
    ],
    endpoint:'Montar um laboratório virtual com Windows e Linux para experimentação, snapshots e análise segura.'
  },
  {
    id:'m2', num:'02', phase:1, title:'Sistemas Operacionais',
    objective:'Artefatos e estruturas internas do Windows e do Linux.',
    groups:[
      { name:'Windows forensics', items:['Windows Internals (User Mode / Kernel Mode)','Registro do Windows (Registry)','NTFS e Master File Table (MFT)','Prefetch, Amcache e Shimcache','Event Logs (.EVTX)','Serviços e Scheduled Tasks','Windows Defender','PowerShell Logging (Script Block Logging)','LNK Files e Jump Lists'] },
      { name:'Linux forensics', items:['Linux Internals (kernel, processos)','EXT4 / XFS e estrutura de inodes','Diretório /proc','Logs em /var/log e bash_history','Cronjobs e systemd','Logs de SSH'] }
    ],
    endpoint:'Investigar um servidor Linux comprometido e reconstruir cronologicamente a cadeia de eventos.'
  },
  {
    id:'m3', num:'03', phase:1, title:'Redes e Infraestrutura',
    objective:'Identificar e correlacionar evidências que trafegam pela rede.',
    groups:[
      { name:'Fundamentos', items:['TCP/IP, DNS, HTTP/HTTPS','DHCP e SMTP','VPN, Firewall, Proxy, NAT'] },
      { name:'Investigação de rede', items:['Análise de PCAP','Firewall, proxy e DNS logs','NetFlow e IDS/IPS'] },
      { name:'Ferramentas', items:['Wireshark e tcpdump','Zeek e Suricata'] }
    ],
    endpoint:'Identificar comunicação suspeita, movimentação lateral e conexões com infraestrutura externa.'
  },
  {
    id:'m4', num:'04', phase:2, title:'Programação e Automação',
    objective:'Saber quando usar cada linguagem — não apenas conhecê-las isoladamente.',
    groups:[
      { name:'Bash (Linux)', items:['grep, awk, sed, find, strings','journalctl, ps, netstat, ss, lsof','Automação de coleta de evidências'] },
      { name:'PowerShell (Windows)', items:['WMI / CIM','Script Block Logging (Event ID 4104)','Desofuscação de comandos em Base64'] },
      { name:'C', items:['Acesso direto à memória e structs binárias','malloc/free e gerenciamento manual','Syscalls e chamadas WinAPI'] },
      { name:'C++', items:['Classes, herança e STL','Engenharia reversa de malware complexo','Análise de VTABLE e objetos injetados'] },
      { name:'Go (Golang)', items:['Compilação estática (binário único)','Goroutines e concorrência massiva','Parsers de rede (.pcap)'] }
    ],
    endpoint:'Desenvolver uma ferramenta de triagem capaz de analisar milhares de arquivos e logs simultaneamente.'
  },
  {
    id:'m5', num:'05', phase:3, title:'Computação Forense',
    objective:'O núcleo técnico da perícia: disco, memória e evidências voláteis.',
    groups:[
      { name:'Aquisição de evidências', items:['Disk image (bit-a-bit) com hash de validação','Memory dump','Network capture','Mobile e cloud evidence'] },
      { name:'Sistemas de arquivos', items:['FAT, NTFS, ReFS (Windows)','EXT4, XFS, BTRFS (Linux)','Journaling, metadata e file carving'] },
      { name:'Memory forensics', items:['Identificar processos ocultos e DLL injection','Mapear conexões de rede ativas na memória','Reconhecer malware sem arquivo (fileless)'] }
    ],
    endpoint:'Reconstruir a linha do tempo completa de um incidente a partir de imagem de disco e dump de memória.'
  },
  {
    id:'m6', num:'06', phase:4, title:'Engenharia Reversa e Malware',
    objective:'Entender o comportamento de binários maliciosos.',
    groups:[
      { name:'Fluxo de análise', items:['Hash → análise estática → análise dinâmica','Disassembly e decompilação','Extração de indicadores de comprometimento (IOCs)'] },
      { name:'Conhecimentos', items:['Assembly x86/x64','PE Format e ELF Format','Debugging e técnicas de ofuscação'] },
      { name:'Ferramentas', items:['Ghidra e IDA','x64dbg e WinDbg','Radare2 / Cutter'] }
    ],
    endpoint:'Descompilar um executável malicioso, identificar chamadas suspeitas e documentar o comportamento.'
  },
  {
    id:'m7', num:'07', phase:5, title:'Resposta a Incidentes',
    objective:'Atuar de forma estruturada durante um incidente em andamento.',
    groups:[
      { name:'As sete fases', items:['Preparação (ferramentas, playbooks)','Identificação (alertas, logs, indicadores)','Contenção (isolamento, segmentação)','Preservação (RAM, logs, disco, rede)','Erradicação da ameaça','Recuperação e monitoramento','Lições aprendidas'] }
    ],
    endpoint:null
  },
  {
    id:'m8', num:'08', phase:5, title:'Cadeia de Custódia',
    objective:'Garantir que a evidência resista ao escrutínio judicial.',
    groups:[
      { name:'Etapas', items:['Coleta → identificação → preservação','Lacração → transporte → armazenamento','Exame → documentação → apresentação'] },
      { name:'Elementos críticos', items:['Integridade e rastreabilidade','Hashes e controle de acesso','Registro de toda manipulação'] }
    ],
    endpoint:null
  },
  {
    id:'m9', num:'09', phase:5, title:'Perícia Judicial',
    objective:'Compreender o papel formal do perito dentro do processo.',
    groups:[
      { name:'Papéis e diferenciação', items:['Perito judicial (auxiliar técnico do juízo)','Assistente técnico (atua para uma das partes)','Diferença frente a analista forense e incident responder'] },
      { name:'Competências do perito', items:['Imparcialidade e metodologia','Rigor técnico e documentação','Comunicação clara e reprodutibilidade'] }
    ],
    endpoint:null
  },
  {
    id:'m10', num:'10', phase:5, title:'Elaboração do Laudo Pericial',
    objective:'Traduzir a investigação técnica em um documento juridicamente sólido.',
    groups:[
      { name:'Estrutura do laudo', items:['Identificação (processo, partes, objeto)','Objetivo — quesitos a responder','Metodologia (ferramentas e procedimentos)','Material analisado','Preservação (hashes e cadeia de custódia)','Análise (artefatos e linha do tempo)','Achados e correlações','Conclusão objetiva aos quesitos'] }
    ],
    endpoint:null
  }
];

const STORAGE_KEY = 'sena-sec-forense-roadmap-v2';
let checked = new Set();
let openModules = new Set();

function itemId(moduleId, gi, ii){ return moduleId + '-g' + gi + '-i' + ii; }

function countTotals(){
  let total = 0;
  MODULES.forEach(m => m.groups.forEach(g => total += g.items.length));
  return total;
}

function countModuleTotals(m){
  let total = 0, done = 0;
  m.groups.forEach((g, gi) => g.items.forEach((it, ii) => {
    total++;
    if (checked.has(itemId(m.id, gi, ii))) done++;
  }));
  return { total, done };
}

function loadProgress(){
  try{
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved){
      const parsed = JSON.parse(saved);
      if (Array.isArray(parsed.checkedIds)) checked = new Set(parsed.checkedIds);
    }
  }catch(e){
    console.warn('LocalStorage não disponível', e);
  }
}

function saveProgress(){
  try{
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ checkedIds: Array.from(checked) }));
  }catch(e){
    console.error('Falha ao salvar progresso', e);
  }
}

function applyOpenHeights(){
  requestAnimationFrame(() => {
    document.querySelectorAll('.module').forEach(el => {
      const body = el.querySelector('.module-body');
      if (openModules.has(el.dataset.id)){
        body.style.maxHeight = body.scrollHeight + 'px';
      } else {
        body.style.maxHeight = '0px';
      }
    });
  });
}

function renderModule(m){
  const { total, done } = countModuleTotals(m);
  const wrap = document.createElement('div');
  wrap.className = 'module' + (openModules.has(m.id) ? ' open' : '');
  wrap.dataset.id = m.id;

  const head = document.createElement('button');
  head.type = 'button';
  head.className = 'module-head';
  head.setAttribute('aria-expanded', openModules.has(m.id) ? 'true' : 'false');
  head.innerHTML =
    '<span class="module-num">' + m.num + '</span>' +
    '<span class="module-titles"><div class="t">' + m.title + '</div><div class="o">' + m.objective + '</div></span>' +
    '<span class="module-progress' + (done === total ? ' done' : '') + '">' + done + '/' + total + '</span>' +
    '<svg class="chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 6l6 6-6 6"/></svg>';
  head.addEventListener('click', () => toggleModule(m.id));

  const body = document.createElement('div');
  body.className = 'module-body';
  const inner = document.createElement('div');
  inner.className = 'module-body-inner';

  m.groups.forEach((g, gi) => {
    const gDiv = document.createElement('div');
    gDiv.className = 'group';
    if (g.name){
      const gName = document.createElement('div');
      gName.className = 'group-name';
      gName.textContent = g.name;
      gDiv.appendChild(gName);
    }
    g.items.forEach((text, ii) => {
      const id = itemId(m.id, gi, ii);
      const row = document.createElement('label');
      row.className = 'item' + (checked.has(id) ? ' checked' : '');
      row.innerHTML = '<input type="checkbox" ' + (checked.has(id) ? 'checked' : '') + ' data-id="' + id + '" data-module="' + m.id + '"><span>' + text + '</span>';
      gDiv.appendChild(row);
    });
    inner.appendChild(gDiv);
  });

  if (m.endpoint){
    const ep = document.createElement('div');
    ep.className = 'endpoint';
    ep.innerHTML = '<div class="lbl">Desafio prático</div><p>' + m.endpoint + '</p>';
    inner.appendChild(ep);
  }

  body.appendChild(inner);
  wrap.appendChild(head);
  wrap.appendChild(body);
  return wrap;
}

function render(){
  const root = document.getElementById('modulesRoot');
  root.innerHTML = '';
  let lastPhase = null;
  MODULES.forEach(m => {
    if (m.phase !== lastPhase){
      lastPhase = m.phase;
      const ph = PHASES[m.phase];
      const div = document.createElement('div');
      div.className = 'phase-divider';
      div.innerHTML = '<span class="label">' + ph.label + '</span><span class="line"></span><span class="duration">' + ph.duration + '</span>';
      root.appendChild(div);
    }
    root.appendChild(renderModule(m));
  });
  updateOverallProgress();
  applyOpenHeights();
}

function toggleModule(id){
  if (openModules.has(id)) openModules.delete(id); else openModules.add(id);
  render();
}

function updateModuleBadge(moduleId){
  const m = MODULES.find(x => x.id === moduleId);
  const { total, done } = countModuleTotals(m);
  const el = document.querySelector('.module[data-id="' + moduleId + '"] .module-progress');
  if (el){
    el.textContent = done + '/' + total;
    el.classList.toggle('done', done === total);
  }
}

function updateOverallProgress(){
  const total = countTotals();
  const done = checked.size;
  const pct = total ? Math.round((done / total) * 100) : 0;
  document.getElementById('progressFill').style.width = pct + '%';
  document.getElementById('progressText').textContent = done + ' de ' + total + ' competências concluídas · ' + pct + '%';
}

function onCheckboxChange(e){
  const id = e.target.dataset.id;
  const moduleId = e.target.dataset.module;
  if (e.target.checked) checked.add(id); else checked.delete(id);
  const row = e.target.closest('.item');
  row.classList.toggle('checked', e.target.checked);
  updateModuleBadge(moduleId);
  updateOverallProgress();
  saveProgress();
}

let resetArmed = false;
let resetTimeout;
document.getElementById('resetBtn').addEventListener('click', () => {
  const btn = document.getElementById('resetBtn');
  if (!resetArmed){
    resetArmed = true;
    btn.textContent = 'Confirmar wipe?';
    btn.classList.add('confirm');
    resetTimeout = setTimeout(() => {
      resetArmed = false;
      btn.textContent = 'Resetar progresso';
      btn.classList.remove('confirm');
    }, 3000);
  } else {
    clearTimeout(resetTimeout);
    checked.clear();
    resetArmed = false;
    btn.textContent = 'Resetar progresso';
    btn.classList.remove('confirm');
    render();
    saveProgress();
  }
});

document.getElementById('modulesRoot').addEventListener('change', (e) => {
  if (e.target.matches('input[type=checkbox]')) onCheckboxChange(e);
});

(function init(){
  loadProgress();
  openModules.add(MODULES[0].id);
  render();
})();