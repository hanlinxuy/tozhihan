# 视觉Token压缩论文 - 机构与引用统计表

本文档整理了2025-2026年关于视觉Token压缩在多模态大语言模型(MLLM/VLM)中的研究论文，包括机构信息和引用数据。

---

## 2026年论文

| 论文标题 | 会议/期刊 | 第一作者机构 | 类型 | 引用数 |
|---------|-----------|-------------|------|--------|
| PPE: Positional Preservation Embedding | ICLR'26 | Huawei Noah's Ark Lab | **Industry (华为)** | N/A |
| MARC: Memory-Augmented RL Token Compression | ICLR'26 | University of Bristol + Memories.ai | Mixed | N/A |
| PAR: Prompt-Aware Token Reduction | ICASSP'26 | Hunan University | Academia | N/A |
| ADAPTIVE-VOCO | ICASSP'26 | Unknown | Unknown | N/A |
| TinyChemVL | AAAI'26 | Chinese Academy of Sciences | Academia | N/A |
| Filter, Correlate, Compress | AAAI'26 | Sichuan University + Alibaba DAMO | **Mixed (阿里)** | N/A |
| Global Compression Commander | AAAI'26 | Sichuan University + SJTU + Alibaba | **Mixed (阿里)** | N/A |
| FastDriveVLA | AAAI'26 | Peking University + XPeng Motors | **Mixed (小鹏)** | N/A |
| TabFlash | AAAI'26 | Korea University + Google Cloud AI | **Mixed (Google)** | N/A |
| Delta-LLaVA | WACV'26 | Unknown | Unknown | N/A |
| LEO-VL | arXiv | Peking University + BIGAI | Academia | N/A |
| On the Adversarial Robustness | arXiv | Hong Kong Polytechnic University | Academia | N/A |
| VideoAuto-R1 | arXiv | KAUST + **Meta** | **Mixed (Meta)** | N/A |
| SparseOccVLA | arXiv | HUST + **Xiaomi EV** | **Mixed (小米)** | N/A |
| Less Is More -- Until It Breaks | arXiv | Griffith University | Academia | N/A |

---

## 2025年论文 - TPAMI & ICML

| 论文标题 | 会议/期刊 | 第一作者机构 | 类型 | 引用数 |
|---------|-----------|-------------|------|--------|
| MovieChat+ | TPAMI'25 | Zhejiang University | Academia | ~20 |
| CoreMatching | ICML'25 | Duke University | Academia | N/A |
| Streamline Without Sacrifice | ICML'25 | NTU Singapore + SenseTime | **Mixed (商汤)** | N/A |
| SparseVLM | ICML'25 | Peking University + UC Berkeley | Academia | ~109 |
| LongVU | ICML'25 | KAUST + **Meta AI** | **Mixed (Meta)** | ~369 |
| Scaling to 10K Frames | ICML'25 | Renmin University + Ant Group + Amazon | Mixed | N/A |

---

## 2025年论文 - ACM MM

| 论文标题 | 会议/期刊 | 第一作者机构 | 类型 | 引用数 |
|---------|-----------|-------------|------|--------|
| TimeChat-Online | ACM MM'25 | Fudan University + ByteDance | **Mixed (字节)** | N/A |
| Short-LVLM | ACM MM'25 | University of Science and Technology of China | Academia | N/A |
| VISA | ACM MM'25 | Xi'an Jiaotong University | Academia | N/A |
| Mitigating Information Loss | ACM MM'25 | University of Macau + Shenzhen University | Academia | N/A |

---

## 2025年论文 - EMNLP

| 论文标题 | 会议/期刊 | 第一作者机构 | 类型 | 引用数 |
|---------|-----------|-------------|------|--------|
| AdaTP | EMNLP'25 | Shanghai Jiao Tong University | Academia | N/A |
| D-CoDe | EMNLP'25 | Tsinghua University + **Meta** | **Mixed (Meta)** | N/A |
| Static or Dynamic | EMNLP'25 | National University of Singapore | Academia | N/A |
| Stop Looking for Important Tokens | EMNLP'25 | University of Macau + DAMO Academy | **Mixed (阿里)** | N/A |
| LightVLM | EMNLP'25 | Fudan University + ByteDance | **Mixed (字节)** | N/A |
| Video Compression Commander | EMNLP'25 | Fudan University + ByteDance | **Mixed (字节)** | N/A |

---

## 2025年论文 - ACL & NeurIPS (部分)

| 论文标题 | 会议/期刊 | 第一作者机构 | 类型 | 引用数 |
|---------|-----------|-------------|------|--------|
| PruneVid | ACL'25 | HKU + Baidu | **Mixed (百度)** | N/A |
| EfficientVLA | NeurIPS'25 | Shanghai Jiao Tong University | Academia | 19 |
| Don't Just Chase "Highlighted Tokens" | NeurIPS'25 | HKUST (Guangzhou) | Academia | N/A |
| UFO | NeurIPS'25 | Peking University + **Alibaba** | **Mixed (阿里)** | N/A |
| VisionThink | NeurIPS'25 | CUHK + **ByteDance** | **Mixed (字节)** | N/A |
| Vision-centric Token Compression | NeurIPS'25 | Central South University | Academia | 2 |

---

## 工业界统计汇总

| 公司 | 论文数量 | 相关论文 |
|------|---------|---------|
| **Meta** | 4 | LongVU (ICML'25), VideoAuto-R1 (arXiv'26), D-CoDe (EMNLP'25), FastVLM (EMNLP'25) |
| **Alibaba/DAMO** | 4 | Filter Correlate Compress (AAAI'26), Global Compression Commander (AAAI'26), UFO (NeurIPS'25), Stop Looking (EMNLP'25) |
| **ByteDance** | 4 | TimeChat-Online (ACM MM'25), LightVLM (EMNLP'25), Video Compression Commander (EMNLP'25), VisionThink (NeurIPS'25) |
| **Huawei** | 1 | PPE (ICLR'26) |
| **Google** | 1 | TabFlash (AAAI'26) |
| **Xiaomi** | 1 | SparseOccVLA (arXiv'26) |
| **XPeng** | 1 | FastDriveVLA (AAAI'26) |
| **Baidu** | 1 | PruneVid (ACL'25) |
| **SenseTime** | 1 | Streamline Without Sacrifice (ICML'25) |
| **Amazon** | 1 | Scaling to 10K Frames (ICML'25) |

---

## 关键发现

### 工业界参与情况

**活跃的工业界参与者：**
- **Meta**: 4篇论文，是唯一活跃的西方科技巨头
- **中国科技公司**: 阿里、字节、华为、小米、百度、商汤等积极产出

**显著缺席的公司：**
- **OpenAI**: 0篇论文
- **Microsoft Research**: 0篇论文
- **Google DeepMind**: 0篇论文（只有Google Cloud AI参与1篇）
- **Apple**: 0篇论文
- **NVIDIA**: 0篇论文

### 学术界主导地位

视觉Token压缩研究主要由**学术界**主导，工业界主要通过以下方式参与：
1. 学术-工业联合研究
2. 公司资助的实验室
3. 实习期间完成的研究工作

### 地理分布

- **中国主导**: 大多数论文来自中国大学和公司
- **美国代表**: Duke, UC Berkeley, University of Washington, University of Utah
- **其他地区**: Singapore (NTU), Hong Kong (HKU, HKUST), Saudi Arabia (KAUST), Australia (Griffith), UK (Bristol), Korea (Korea University)

### 引用领先者（2025年论文）

1. **LongVU** (~369次引用) - Meta + KAUST
2. **SparseVLM** (~109次引用) - Peking University + UC Berkeley

---

## 注意事项

- 2026年论文由于发表时间较新，暂无引用数据
- 2025年部分论文因刚发表或仅在arXiv上，引用数较少
- 类型说明：
  - **Industry**: 完全由工业界主导
  - **Academia**: 完全由学术界主导
  - **Mixed**: 学术界与工业界合作

---

*最后更新: 2026年2月*
