---
title: "Configurando intimações automáticas"
description: "Configure o Judi para receber e analisar intimações automaticamente"
category: "intimacoes"
order: 1
icon: "🔔"
updatedAt: "2026-02-03"
---

# Configurando intimações automáticas

O módulo de Intimações do Judi captura, organiza e analisa suas intimações automaticamente. Nunca mais perca um prazo!

## O que são intimações no Judi?

Intimações são comunicações oficiais dos tribunais que exigem uma ação sua. O Judi:

- 📥 **Captura** intimações automaticamente dos sistemas dos tribunais
- 🔍 **Analisa** o conteúdo usando inteligência artificial
- ⏰ **Calcula** prazos automaticamente
- 🔔 **Notifica** você sobre urgências
- 🔗 **Vincula** ao processo correspondente

## Pré-requisitos

Para receber intimações automáticas, você precisa:

1. **Credenciais de tribunal** — login e senha do portal do advogado
2. **Certificado digital** — para alguns tribunais (OAB ou e-CPF)
3. **Processos cadastrados** — para vinculação automática

## Configurando credenciais

### Passo 1: Acesse as configurações

Vá em **Configurações > Credenciais de Tribunais**.

### Passo 2: Adicione um tribunal

Clique em **"+ Adicionar tribunal"** e selecione:

- TJ do seu estado (ex: TJSP, TJRJ, TJMG)
- TRT da sua região
- TRF da sua região
- Tribunais superiores (STJ, STF, TST)

### Passo 3: Informe suas credenciais

| Campo | Descrição |
|-------|-----------|
| **Login** | Seu usuário no portal do tribunal |
| **Senha** | Sua senha de acesso |
| **OAB** | Número da sua inscrição |
| **Certificado** | Upload do certificado digital (se necessário) |

### Passo 4: Teste a conexão

Clique em **"Testar conexão"** para verificar se as credenciais estão corretas.

### Passo 5: Configure a frequência

Defina com que frequência o Judi deve buscar novas intimações:

- **A cada hora** — recomendado para escritórios com alto volume
- **A cada 6 horas** — equilíbrio entre atualização e recursos
- **Uma vez por dia** — para escritórios com menor volume

> 💡 **Dica:** Quanto maior a frequência, mais cedo você saberá de novas intimações, mas maior o consumo de recursos.

## Tribunais suportados

O Judi integra com os principais sistemas:

### Justiça Estadual
- PJe (Processo Judicial Eletrônico)
- E-SAJ (TJ-SP, TJ-SC, TJ-MS, etc.)
- PROJUDI

### Justiça Federal
- PJe (TRFs)
- E-Proc

### Justiça do Trabalho
- PJe-JT (TRTs e TST)

### Tribunais Superiores
- STJ, STF, TST

> ⚠️ **Nota:** A disponibilidade depende da API de cada tribunal. Alguns podem ter limitações.

## Configurações de análise

### Análise automática de prazos

O Judi usa IA para identificar prazos nas intimações:

1. Vá em **Configurações > Intimações**
2. Ative **"Análise automática de prazos"**
3. Configure o modelo de análise:
   - **Básico** — identifica prazos explícitos
   - **Avançado** — identifica prazos implícitos e tipos de ação necessária

### Alertas de urgência

Configure quando deseja ser alertado:

- **Intimações novas** — assim que chegarem
- **Prazos próximos** — X dias antes do vencimento
- **Prazos hoje** — no dia do vencimento
- **Prazos vencidos** — após o vencimento (emergência!)

### Canais de notificação

Escolha como quer ser notificado:

- ✉️ **Email** — resumo diário ou alertas instantâneos
- 🔔 **Push** — notificações no navegador e app
- 📱 **WhatsApp** — para urgências (em breve)

## Fluxo de trabalho

Quando uma intimação chega:

```
1. 📥 Captura automática do tribunal
         ↓
2. 🔍 Análise de conteúdo (IA)
         ↓
3. 🔗 Vinculação ao processo
         ↓
4. ⏰ Cálculo de prazo
         ↓
5. 🔔 Notificação para você
         ↓
6. ✅ Você analisa e toma ação
```

## Gerenciando intimações

### Status das intimações

- 🆕 **Nova** — não lida
- 👀 **Visualizada** — você já viu
- ⏳ **Em andamento** — ação sendo tomada
- ✅ **Concluída** — prazo cumprido
- ❌ **Ignorada** — não requer ação

### Ações em lote

Selecione múltiplas intimações para:
- Marcar como lidas
- Atribuir a um advogado
- Exportar para planilha
- Arquivar

---

**Próximos passos:**
- [Análise automática de prazos](/ajuda/intimacoes/analise-automatica)
- [Vinculando intimações a processos](/ajuda/intimacoes/vinculacao)
- [Configurando alertas](/ajuda/configuracoes/notificacoes)
